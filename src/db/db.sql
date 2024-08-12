
CREATE DATABASE winfake;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    user_tg_id INTEGER,
    username VARCHAR(36) DEFAULT NULL,
    first_name VARCHAR(36) DEFAULT NULL,
    balance_winnie INTEGER DEFAULT 0,
    balance_ton INTEGER DEFAULT 0,
    status VARCHAR(15) DEFAULT NULL,
    lastDate INTEGER DEFAULT NULL,
    bonuses INTEGER DEFAULT 0,
    date VARCHAR(36) DEFAULT NULL,
    referer INTEGER DEFAULT 0
)

CREATE TABLE users(
    user_tg_id INTEGER PRIMARY KEY,
    balance_winnie INTEGER DEFAULT 5000,
    balance_ton INTEGER DEFAULT 1,
    status VARCHAR(15) DEFAULT NULL,
    lastDate INTEGER DEFAULT NULL,
    bonuses INTEGER DEFAULT 0,
    date VARCHAR(36) DEFAULT NULL,
    spin_date VARCHAR(36) DEFAULT NULL,
    referer INTEGER DEFAULT 0
)

INSERT INTO users (user_tg, balance_winnie,balance_ton,status,lastDate,bonuses,date,spin_date,referer) VALUES (123456789, 6000, 2,'active',1687812345,10,'2024-08-11', '2024-08-10',987654321);



INSERT INTO users (user_tg_id, username, first_name, balance_winnie, balance_ton, status, lastDate, bonuses, date, referer) VALUES
(12345678, 'user1', 'John', 100, 200, 'active', 1625017600, 10, '2021-06-30', 1),
(23456789, 'user2', 'Jane', 150, 250, 'inactive', 1625017601, 20, '2021-07-01', 2),
(34567890, 'user3', 'Alice', 200, 300, 'active', 1625017602, 30, '2021-07-02', 3);



CREATE TABLE tasks (
    id serial PRIMARY KEY,
    title VARCHAR(255),
    amount INT,
    status VARCHAR(50),
    image VARCHAR(50)
); 


INSERT INTO tasks (title, amount, status, image)
VALUES 
('Join crypto navigator channel', 1000, 'active', 'telegram'),
('Join crypto bot', 2000, 'active', 'telegram'),
('Crypto youtube', 2000, 'active', 'youtube');



CREATE TABLE mytasks (
    id serial PRIMARY KEY,
    user_tg INT NOT NULL,
    task_id INT NOT NULL
);


INSERT INTO mytasks (user_tg, task_id) 
VALUES 
(7949797, 1),
(7949797, 2);