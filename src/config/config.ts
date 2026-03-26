export const config ={
  insurance: {
    url: process.env.INSURANCE_API_URL,
    user: process.env.INSURANCE_USER,
    password: process.env.INSURANCE_PASSWORD
  },
  sftp: {
    host: process.env.SFTP_HOST,
    user: process.env.SFTP_USER,
    password: process.env.SFTP_PASSWORD,
    path: process.env.SFTP_PATH
  }
}