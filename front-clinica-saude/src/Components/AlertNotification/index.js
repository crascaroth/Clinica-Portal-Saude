import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faExclamationTriangle, faWindowClose } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

const MainAlert = styled.div``
const Message = styled.span``
const CloseBtn = styled.span``

const AlertNotificationComponent = () => {
    return (
        <MainAlert>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <Message>Mensagem: Aqui está mensagem de teste!</Message>
            <CloseBtn>
                <FontAwesomeIcon icon={faWindowClose} />
            </CloseBtn>
        </MainAlert>
    )
}

export default AlertNotificationComponent