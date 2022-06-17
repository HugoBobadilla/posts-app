CREATE TABLE post(
  id INT NOT NULL AUTO_INCREMENT,
  postBody VARCHAR(255),
  userId INT,
  PRIMARY KEY(id),
  CONSTRAINT fk_user FOREIGN KEY(userId)
  REFERENCES user(id)
  ON DELETE CASCADE
);

CREATE TABLE user(
  id INT NOT NULL AUTO_INCREMENT,
  fullName VARCHAR(255) NOT NULL,
  username VARCHAR(64) NOT NULL,
  userPassword VARCHAR(64) NOT NULL,
  PRIMARY KEY(id)
);

CREATE TABLE comment(
  id INT NOT NULL AUTO_INCREMENT,
  commentBody VARCHAR(255) NOT NULL,
  userId INT,
  postId INT,
  PRIMARY KEY(id),
  CONSTRAINT fk_post FOREIGN KEY(postId) REFERENCES post(id) ON DELETE CASCADE
);

INSERT INTO user(fullName, username, userPassword)
VALUES ('Hugo Bobadilla', 'huguito', '12345');

INSERT INTO post(postBody, userId) 
VALUES('I love pizza and beer!', 1);

SELECT post.postBody, user.fullName FROM post INNER JOIN user ON post.userId=user.id;

INSERT INTO comment(commentBody, postId)
VALUE ('I hate beer', 2);

SELECT post.userId, post.postBody, comment.commentBody FROM comment 
INNER JOIN post ON comment.postId=comment.id;