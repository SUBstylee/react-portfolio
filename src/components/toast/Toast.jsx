import './Toast.scss';

const Toast = ({hidden,message}) => {
  return (
    <div className='toast'>
        <p className={`toast__message ${hidden===false?'hidden':''}`}>{message}</p>
    </div>
  )
}

export default Toast