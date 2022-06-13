CREATE TABLE "galleryList" (
	"id" SERIAL PRIMARY KEY,
	"path" VARCHAR (250) NOT NULL,
	"name" VARCHAR (30) NOT NULL,
	"description" VARCHAR (250) NOT NULL,
	"likes" INTEGER
);
        
INSERT INTO "galleryList" 
	("path", "name", "description", "likes") 
VALUES 
	('https://i.imgur.com/p1xmY0q.png', 'Roseanne Conner', 'An opinionated, assertive, loud, smart-mouthed, bossy but still caring, loving and devoted mother of 4 children and wife of Dan Conner', 12),
	('https://i.imgur.com/XI4q654.png', 'Dan Conner', 'A funny, caring, sweet, loving, and easygoing family man who works as a drywall contractor.', 27),
	('https://i.imgur.com/AIg5LOq.png', 'Jackie Harris', 'Somewhat neurotic sister of Roseanne who has had man troubles; she is a warm, loving and devoted aunt to Becky, Darlene and D.J.', 7),
	('https://media.architecturaldigest.com/photos/5acbb57d70a2ae0282826302/master/w_3000,h_2000,c_limit/148399_2459.jpg', 'Family Couch', 'Truly Iconic', 473),
	('https://i.imgur.com/W4OOwTa.png', 'DJ Conner','First son of Dan and Roseanne Conner. A naive, boisterous, and innocently mischief-making child who grows and develops an interest in filmmaking.', 31),
	('https://i.imgur.com/MO2PpQV.png', 'Darlene Conner','Sarcastic and artistic, sometimes emotional, as well as witty middle child of Dan and Roseanne Conner who becomes an artist, wife of longtime boyfriend David Healy, and mother later in the series', 14),
	('https://i.imgur.com/Zlccbt0.png', 'Becky Conner', 'The oldest daughter of Dan and Roseanne. She is an intelligent and overachieving, but quick-tempered, easily angered, and sometimes critical. She does have her soft sides at times.', 0),
	('https://i.imgur.com/hMQgF42.png', 'David Healy', 'Sensitive, polite, shy boyfriend of Darlene, later husband.', 17);