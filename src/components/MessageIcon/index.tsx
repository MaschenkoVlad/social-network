interface IProps {
  width: string
  height: string
}

const MessageIcon: React.FC<IProps> = ({ width, height }): JSX.Element => {
  return (
    <>
      <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="#222222" />
        <path d="M4 9L11.1056 12.5528C11.6686 12.8343 12.3314 12.8343 12.8944 12.5528L20 9" stroke="#222222" />
      </svg>
    </>
  )
}

export default MessageIcon
