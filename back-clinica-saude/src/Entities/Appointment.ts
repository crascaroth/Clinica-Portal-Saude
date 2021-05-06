export type InputAppointment = {
    fk_paciente: string,
    fk_medico: string,
    pagamento_total: number,
    data: Date,
    retorno: Date
}

export type InputAppointmentComplete = {    
    id: string,
    fk_paciente: string,
    fk_medico: string,
    pagamento_total: number,
    data: Date,
    retorno: Date
}