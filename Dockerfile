# Use Node.js 22 as the base image
FROM node:22-slim AS base

# Install pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

# --- Build Stage ---
FROM base AS build

# Copy package files
COPY package.json pnpm-lock.yaml ./
# pnpm needs the patch files at install time (package.json patchedDependencies
# references patches/wouter@3.7.1.patch), so copy them before installing.
COPY patches ./patches

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy the rest of the application code
COPY . .

# Build the frontend and the server
# Based on package.json: vite build (frontend) && esbuild (server)
RUN pnpm run build

# --- Production Stage ---
FROM base AS runner

WORKDIR /app

# Set environment to production
ENV NODE_ENV=production

# Copy built files from the build stage
# The 'dist' folder contains both the server (index.js) and the frontend (public/)
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json /app/pnpm-lock.yaml ./
# Same as the build stage: the prod install needs the patch files too.
COPY --from=build /app/patches ./patches

# Install only production dependencies
RUN pnpm install --prod --frozen-lockfile

# Expose the port the app runs on
EXPOSE 3000

# Start the server
CMD ["node", "dist/index.js"]
