export const CONNECTION_STRING = `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_PASSWORD}@${process.env.DB_PROVIDER}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
