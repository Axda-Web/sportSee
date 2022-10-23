import StyledError from './Error.styled'

/**
 * Display the Error page content
 * @returns {JSX.element} - Error component
 */
const Error = () => {
  return (
    <StyledError className='main-content'>
        <p className="number">404</p>
        <p className="text">Oups! La page que vous demandez n'existe pas.</p>
    </StyledError>
  )
}

export default Error