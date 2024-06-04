FROM node:20-alpine
WORKDIR /usr/src/ogivc/
COPY .env .
# COPY .next/ .
COPY Next13.requestObject.js .
COPY app/ ./app/
COPY components/ ./components/
COPY jsconfig.json .
COPY models/ ./models/
COPY next.config.js .
COPY package.json .
COPY package-lock.json .
COPY postcss.config.js .
COPY public/ ./public/
COPY shell-colors.txt .
COPY styles/ ./styles/
COPY tailwind.config.js .
COPY utils/ ./utils/
RUN npm install
RUN npm run build
EXPOSE 3300
CMD ["npm", "start"]
