

(`
CREATE TABLE IF NOT EXISTS medico (
    id VARCHAR(255) PRIMARY KEY,
    login TEXT NOT NULL,
    password TEXT NOT NULL,
    fk_especialidade	VARCHAR(255) NOT NULL,
    FOREIGN KEY (fk_especialidade) REFERENCES especialidades(id)
  );
  
  CREATE TABLE IF NOT EXISTS especialidades (
    id VARCHAR(255) PRIMARY KEY,
    especialidade TEXT NOT NULL
  );
  
  CREATE TABLE IF NOT EXISTS paciente (
    id VARCHAR(255) PRIMARY KEY,
    login TEXT NOT NULL,
    password TEXT NOT NULL
  );
  `)