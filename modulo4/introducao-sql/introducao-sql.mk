#### CREATE TABLE Actor (
#### id VARCHAR(255) PRIMARY KEY,
#### name VARCHAR (255) NOT NULL,
#### salary FLOAT NOT NULL,
#### birth_date DATE NOT NULL,
#### gender VARCHAR(6) NOT NULL
#### );

#### SHOW TABLES;

#### DESCRIBE Actor;

#### DROP TABLE Actor;

# -- Colocando o primeiro ator 

#### INSERT INTO Actor (id, name, salary, birth_date, gender)
#### VALUES(
#### "001",
#### "Tony Ramos",
#### 400000,
#### "1948-08-25",
#### "male"
#### );

#### INSERT INTO Actor (id, name, salary, birth_date, gender)
#### VALUES(
#### "002",
#### "Glória Pires",
#### 1200000,
#### "1963-08-23",
#### "female"
#### );

#### INSERT INTO Actor (id, name, salary, birth_date, gender)
#### VALUES(
#### "002",
#### "Glória Pires 2",
#### 1200000,
#### "1963-08-23",
#### "female"
#### );

# -- Error Code: 1062. Duplicate entry '002' for key 'PRIMARY'
# -- Entrada '002' duplicada para a chave 'PRIMARY'
 
####  INSERT INTO Actor (id, name, salary)
#### VALUES(
####   "003", 
####   "Fernanda Montenegro",
####   300000,
####   "1929-10-19", 
####   "female"
#### );
#### -- Error Code: 1136. Column count doesn't match value count at row 1
#### -- A contagem de colunas não corresponde á contagem de valores na linha 1

#### INSERT INTO Actor (id, name, salary, birth_date, gender)
#### VALUES(
####   "003", 
####   "Fernanda Montenegro",
####   300000,
####   "1929-10-19", 
####   "female"
#### );

#### -- CERTO 
#### INSERT INTO Actor (id, salary, birth_date, gender)
#### VALUES(
####   "004",
####   400000,
####   "1949-04-18", 
####   "male"
#### );
# -- Error Code: 1364. Field 'name' doesn't have a default value
# -- O campo 'nome' não tem um valor padrão

#### INSERT INTO Actor (id, name, salary, birth_date, gender)
#### VALUES(
####   "004", 
####   "Antônio Fagundes",
####   400000,
####   "1949-04-18", 
####   "male"
#### );

# -- CERTO

#### INSERT INTO Actor (id, name, salary, birth_date, gender)
#### VALUES(
####   "005", 
####   "Juliana Paes",
####   719333.33,
####   1979-03-26, 
####   "female"
#### );
#### -- Error Code: 1292. Incorrect date value: '1950' for column "birth_date" at now 1
#### -- Valor de data incorreto: '1950' para a coluna "birth_date" 

#### INSERT INTO Actor (id, name, salary, birth_date, gender)
#### VALUES(
####   "005", 
####   "Juliana Paes",
####   719333.33,
####   "1979-03-26", 
####   "female"
#### );

#-- CERTO
#-- EXERCICIO 3
# SELECT * FROM Actor;

#### SELECT id, salary FROM Actor;

#### SELECT id, name FROM Actor 
#### WHERE gender = "male";
# -- a)
#### SELECT * FROM Actor
#### WHERE gender = "female";
# -- b)
#### SELECT salary FROM Actor
#### WHERE name="Tony Ramos";
# -- c)
#### SELECT * FROM Actor 
#### WHERE gender = "invalid";
# -- d) 
#### SELECT id, name, salary FROM Actor
#### WHERE salary <= 500000;
# -- e)
#### SELECT id, nome from Actor 
#### WHERE id = "002";
# -- o nome da coluna é "name" e não "nome" por isso deu erro.

# -- EXERCICIO 4
# -- a)
#### SELECT * FROM Actor
#### WHERE (name LIKE "a%" OR name LIKE "j%") AND salary > 300000;
#### -- Seleciona todos os atores que começam com A ou J, e atores que tem um salario acima de 300000.
# -- b)
#### SELECT * FROM Actor
#### WHERE name NOT LIKE "a%" AND salary > 350000;
# -- c)
#### SELECT * FROM Actor
#### WHERE name LIKE "%g%";
# -- d)
#### SELECT * FROM Actor
#### WHERE (name LIKE "%a%" OR name LIKE "%g%") AND salary BETWEEN 350000 AND 900000;

# -- EXERCICIO 5 

#### CREATE TABLE Movies(
#### id VARCHAR(255) PRIMARY KEY,
#### nome VARCHAR (255) NOT NULL UNIQUE,
#### sinopse TEXT NOT NULL,
#### data_de_lancamento DATE NOT NULL,
#### avaliacao INT NOT NULL 
#### );

#### INSERT INTO Movies (id, nome, sinopse, data_de_lancamento, avaliacao)
#### VALUE(
#### 001,
#### "Se Eu Fosse Você",
#### "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. 
#### Um dia eles são atingidos por um fenômeno inexplicavel e trocam de corpos",
#### "2006-01-06",
#### 7
#### );

#### INSERT INTO Movies(id, nome, sinopse, data_de_lancamento, avaliacao)
#### VALUE(
#### 002,
#### "Doce de mãe",
#### "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. 
#### A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de 
#### Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
#### "2012-12-27",
#### 10
#### );

#### INSERT INTO Movies(id, nome, sinopse, data_de_lancamento, avaliacao)
#### VALUE(
#### 003,
#### "Dona Flor e Seus Dois Maridos",
#### "Dona Flor é uma sedutora professora de culinária casada com 
#### Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
#### "2017-11-02",
#### 8
#### );

#### INSERT INTO Movies(id, nome, sinopse, data_de_lancamento, avaliacao)
#### VALUE(
#### 004,
#### "Tropa de Elite",
#### "Nascimento, capitão da Tropa de Elite do Rio de Janeiro, é designado para chefiar uma das equipes que tem como missão apaziguar o 
#### Morro do Turano. Ele precisa cumprir as ordens enquanto procura por um substituto para ficar em seu lugar. Em meio a um tiroteio, 
#### Nascimento e sua equipe resgatam Neto e Matias, dois aspirantes a oficiais da PM. 
#### Ansiosos para entrar em ação e impressionados com a eficiência de seus salvadores, os dois se candidatam ao curso de formação da 
#### Tropa de Elite.",
#### "2007-10-5",
#### 9
#### );
# -- EXERCICIO 6
# -- a)
#### SELECT id, nome FROM Movies
#### WHERE id = 004;
# -- b)
#### SELECT * FROM Movies
#### WHERE nome = "Dona Flor e Seus Dois Maridos";
# -- c)
#### SELECT id, nome, sinopse FROM Movies
#### WHERE avaliacao >= 7;

# -- EXERCICIO 7
# -- a)
#### SELECT * FROM Movies
#### WHERE nome LIKE "%vida%";
# -- b)
#### SELECT 