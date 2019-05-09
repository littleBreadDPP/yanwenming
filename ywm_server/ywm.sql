#设置客户端连接服务器端编码
SET NAMES UTF8;
#丢弃数据库ywm，如果存在的话
DROP DATABASE IF EXISTS ywm;
#创建数据库ywm，设置存储的编码
CREATE DATABASE ywm CHARSET=UTF8;
#进入数据库
USE ywm;
CREATE TABLE ywm_user(
  lid TINYINT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(10) UNIQUE,
  upwd VARCHAR(32)
);
#插入数据
INSERT INTO ywm_user VALUES(NULL,'dangdang',md5(123456));
INSERT INTO ywm_user VALUES(NULL,'tom',md5(123456));
INSERT INTO ywm_user VALUES(NULL,'dingding',md5(123456));


CREATE TABLE ywm_userData(
  eid TINYINT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(10) UNIQUE,
  personmoney VARCHAR(32),
  integral VARCHAR(32),
  coupon VARCHAR(32)
);

INSERT INTO ywm_userData VALUES(NULL,'dangdang',1500,1800,1);
INSERT INTO ywm_userData VALUES(NULL,'tom',1800,1300,2);
INSERT INTO ywm_userData VALUES(NULL,'dingding',3000,2500,8);

CREATE TABLE ywm_lists(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title   VARCHAR(255),
  price VARCHAR(2000),
  price2 VARCHAR(2000),
  num VARCHAR(2000)
);
INSERT INTO ywm_lists VALUES(null,'pic01.jpg','颜文明旗舰店Classical运动鞋男/女 男鞋头层牛皮休闲专业网球鞋',699.00,700.00,10);
INSERT INTO ywm_lists VALUES(null,'pic02.jpg','颜文明旗舰店Classical运动鞋男/女 男鞋头层牛皮休闲专业网球鞋',299.00,350.00,25);
INSERT INTO ywm_lists VALUES(null,'pic03.jpg','李宁运动套装健身服男三件套速干衣跑步训练服紧身衣健身房压缩衣 黑色三件套=短袖+短裤+健身裤 L(175)',499.00,550.00,76);
INSERT INTO ywm_lists VALUES(null,'pic04.jpg','斯伯丁Spalding 比赛篮球74-604Y 室内外PU耐磨7号NBA蓝球',410.00,450.00,99);
INSERT INTO ywm_lists VALUES(null,'pic05.jpg','耐克跑步鞋男飞织气垫鞋春夏季新款网面透气减震慢跑鞋运动鞋 M9055 酷黑 42',299.00,350.00,10);
INSERT INTO ywm_lists VALUES(null,'pic06.jpg','Adidas阿迪达斯男装 新款休闲男装',199.00,350.00,78);
INSERT INTO ywm_lists VALUES(null,'pic07.jpg','耐克NIKE体育用品男帽女帽 2018新款网球',199.00,250.00,33);
INSERT INTO ywm_lists VALUES(null,'pic08.jpg','香港颜文明男式牛皮经典网球运动鞋时尚复古休闲鞋 1517104正品',199.00,300.00,20);
INSERT INTO ywm_lists VALUES(null,'pic01.jpg','颜文明旗舰店Classical运动鞋男/女 男鞋头层牛皮休闲专业网球鞋',699.00,700.00,70);
INSERT INTO ywm_lists VALUES(null,'pic02.jpg','颜文明旗舰店Classical运动鞋男/女 男鞋头层牛皮休闲专业网球鞋',299.00,350.00,41);
INSERT INTO ywm_lists VALUES(null,'pic03.jpg','李宁运动套装健身服男三件套速干衣跑步训练服紧身衣健身房压缩衣 黑色三件套=短袖+短裤+健身裤 L(175)',499.00,550.00,0);
INSERT INTO ywm_lists VALUES(null,'pic04.jpg','斯伯丁Spalding 比赛篮球74-604Y 室内外PU耐磨7号NBA蓝球',399.00,450.00,22);
INSERT INTO ywm_lists VALUES(null,'pic05.jpg','耐克跑步鞋男飞织气垫鞋春夏季新款网面透气减震慢跑鞋运动鞋 M9055 酷黑 42',299.00,350.00,60);
INSERT INTO ywm_lists VALUES(null,'pic06.jpg','Adidas阿迪达斯男装 新款休闲男装',199.00,350.00,89);
INSERT INTO ywm_lists VALUES(null,'pic07.jpg','耐克NIKE体育用品男帽女帽 2018新款网球',210.00,250.00,45);
INSERT INTO ywm_lists VALUES(null,'pic08.jpg','香港颜文明男式牛皮经典网球运动鞋时尚复古休闲鞋 1517104正品',199.00,300.00,67);

CREATE TABLE ywm_cart(
  pid INT PRIMARY KEY AUTO_INCREMENT,
  pic VARCHAR(25),
  pname VARCHAR(25),
  price1 DECIMAL(10,2),
  price2 DECIMAL(10,2),
  count INT,
  uid   INT
);

CREATE TABLE ywm_details(
  did INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title   VARCHAR(255),
  price VARCHAR(2000),
  price2 VARCHAR(2000),
  dnum2 VARCHAR(2000),
  dnum1 VARCHAR(2000),
  dnum3 VARCHAR(2000),
  pid VARCHAR(100)
);
INSERT INTO ywm_details VALUES(null,'pic01.jpg','颜文明旗舰店Classical运动鞋男/女 男鞋头层牛皮休闲专业网球鞋',699.00,700.00,10,2,1000,0);
INSERT INTO ywm_details VALUES(null,'pic02.jpg','颜文明旗舰店Classical运动鞋男/女 男鞋头层牛皮休闲专业网球鞋',299.00,350.00,25,5,2000,1);
INSERT INTO ywm_details VALUES(null,'pic03.jpg','李宁运动套装健身服男三件套速干衣跑步训练服紧身衣健身房压缩衣 黑色三件套=短袖+短裤+健身裤 L(175)',499.00,550.00,76,10,2500,2);
INSERT INTO ywm_details VALUES(null,'pic04.jpg','斯伯丁Spalding 比赛篮球74-604Y 室内外PU耐磨7号NBA蓝球',410.00,450.00,99,19,300,3);
INSERT INTO ywm_details VALUES(null,'pic05.jpg','耐克跑步鞋男飞织气垫鞋春夏季新款网面透气减震慢跑鞋运动鞋 M9055 酷黑 42',299.00,350.00,10,233,1000,4);
INSERT INTO ywm_details VALUES(null,'pic06.jpg','Adidas阿迪达斯男装 新款休闲男装',199.00,350.00,78,20,800,5);
INSERT INTO ywm_details VALUES(null,'pic07.jpg','耐克NIKE体育用品男帽女帽 2018新款网球',199.00,250.00,33,2,10,6);
INSERT INTO ywm_details VALUES(null,'pic08.jpg','香港颜文明男式牛皮经典网球运动鞋时尚复古休闲鞋 1517104正品',199.00,300.00,20,12,2000,7);
INSERT INTO ywm_details VALUES(null,'pic01.jpg','颜文明旗舰店Classical运动鞋男/女 男鞋头层牛皮休闲专业网球鞋',699.00,700.00,70,42,150,8);
INSERT INTO ywm_details VALUES(null,'pic02.jpg','颜文明旗舰店Classical运动鞋男/女 男鞋头层牛皮休闲专业网球鞋',299.00,350.00,41,37,400,9);
INSERT INTO ywm_details VALUES(null,'pic03.jpg','李宁运动套装健身服男三件套速干衣跑步训练服紧身衣健身房压缩衣 黑色三件套=短袖+短裤+健身裤 L(175)',499.00,550.00,0,2,600,10);
INSERT INTO ywm_details VALUES(null,'pic04.jpg','斯伯丁Spalding 比赛篮球74-604Y 室内外PU耐磨7号NBA蓝球',399.00,450.00,22,21,1000,11);
INSERT INTO ywm_details VALUES(null,'pic05.jpg','耐克跑步鞋男飞织气垫鞋春夏季新款网面透气减震慢跑鞋运动鞋 M9055 酷黑 42',299.00,350.00,60,33,1000,12);
INSERT INTO ywm_details VALUES(null,'pic06.jpg','Adidas阿迪达斯男装 新款休闲男装',199.00,350.00,89,402,300,13);
INSERT INTO ywm_details VALUES(null,'pic07.jpg','耐克NIKE体育用品男帽女帽 2018新款网球',210.00,250.00,45,35,700,14);
INSERT INTO ywm_details VALUES(null,'pic08.jpg','香港颜文明男式牛皮经典网球运动鞋时尚复古休闲鞋 1517104正品',199.00,300.00,67,7,100,15);


CREATE TABLE ywm_personPic(
  lid TINYINT PRIMARY KEY AUTO_INCREMENT,
  pname VARCHAR(10) UNIQUE,
  uid VARCHAR(32),
  pic VARCHAR(200)
);