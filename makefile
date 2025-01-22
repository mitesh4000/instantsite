.PHONY: start

prep:
	(cd server && npm i) & (cd client && npm i) & wait
dev:
	(cd server && npm run dev) & (cd client && npm run dev) & wait
