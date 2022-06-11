CREATE TABLE "galleryList" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (250) NOT NULL,
	"description" VARCHAR (250) NOT NULL,
	"likes" INTEGER
);

INSERT INTO "galleryList" 
	("path", "description", "likes") 
VALUES 
	('images/goat_small.jpg', '111 Photo', 0),
	('images/goat_small.jpg', '222 Photo', 0),
	('images/goat_small.jpg', '333 Photo', 0),
	('images/goat_small.jpg', '444 Photo', 0),
	('images/goat_small.jpg', '555 Photo', 0),
	('images/goat_small.jpg', '666 Photo', 0)