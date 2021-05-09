

(`

SELECT * from especialidades;
CREATE TABLE IF NOT EXISTS especialidades (
  id VARCHAR(255) PRIMARY KEY,
  especialidade TEXT NOT NULL
);

SELECT * from medico;
CREATE TABLE IF NOT EXISTS medico (
  id VARCHAR(255) PRIMARY KEY,
  login TEXT NOT NULL,
  password TEXT NOT NULL,
  fk_especialidade	VARCHAR(255) NOT NULL,
  FOREIGN KEY (fk_especialidade) REFERENCES especialidades(id)
);

SELECT * from paciente;
CREATE TABLE IF NOT EXISTS paciente (
  id VARCHAR(255) PRIMARY KEY,
  login TEXT NOT NULL,
  password TEXT NOT NULL
);

SELECT * from agendamento;
CREATE TABLE IF NOT EXISTS agendamento (
			id VARCHAR(255) PRIMARY KEY NOT NULL,
			fk_paciente TEXT NOT NULL, 
            fk_medico TEXT NOT NULL,
            pagamento_total FLOAT NOT NULL, 
            data DATE NOT NULL,
            retorno DATE NOT NULL
);


SELECT * from tipo_de_agendamento;
CREATE TABLE IF NOT EXISTS tipo_de_agendamento (
	id VARCHAR(255) PRIMARY KEY NOT NULL,
    nome TEXT NOT NULL,
    preco FLOAT NOT NULL
);

SELECT * FROM relacao_tipo_agendamento;
CREATE TABLE IF NOT EXISTS relacao_tipo_agendamento(
fk_agendamento VARCHAR(255) NOT NULL,
fk_tipo_de_agendamento VARCHAR(255) NOT NULL,
FOREIGN KEY (fk_agendamento) REFERENCES agendamento(id),
FOREIGN KEY (fk_tipo_de_agendamento) REFERENCES tipo_de_agendamento(id)
);

SELECT * FROM laudo;
CREATE TABLE IF NOT EXISTS laudo(
id VARCHAR(255) PRIMARY KEY NOT NULL,
fk_medico VARCHAR(255) NOT NULL,
fk_paciente VARCHAR(255) NOT NULL,
data DATE NOT NULL,
atualizacao DATE,
descricao TEXT
);


`)