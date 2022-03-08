FROM node:14

# Create app directory
RUN mkdir -p /app
WORKDIR /app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

# expose 5000 on container
EXPOSE 3000

# set app serving to permissive / assigned
ENV NUXT_HOST=0.0.0.0
# set app port
ENV NUXT_PORT=3000