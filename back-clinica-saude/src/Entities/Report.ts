export type InputReport = {
    fk_medico: string,
    fk_paciente: string,
    data: Date,
    atualizacao: Date,
    descricao: string
}

export type InputReportComplete = {
    id: string,
    fk_medico: string,
    fk_paciente: string,
    data: Date,
    atualizacao: Date,
    descricao: string
}