export function MailIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <rect x="2.5" y="4.5" width="15" height="11" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M3.5 6L10 10.5L16.5 6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ChatIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M3.5 6.2C3.5 4.7 4.7 3.5 6.2 3.5H13.8C15.3 3.5 16.5 4.7 16.5 6.2V10.8C16.5 12.3 15.3 13.5 13.8 13.5H8.3L4.8 16.3V13.4C4 13.1 3.5 12.3 3.5 11.4V6.2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  )
}
