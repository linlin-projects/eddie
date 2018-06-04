FROM		node:8-alpine
RUN		apk update \
		&& apk upgrade \
		&& apk add yarn \
		&& mkdir eddie \
		&& cd eddie
ADD		. .
RUN		yarn install
EXPOSE		3000
ENTRYPOINT	["yarn","start"]
