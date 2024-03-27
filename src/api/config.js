const base = import.meta.env.VITE_APP_API_SERVER_URL

const APIConfig = {
    base,
    metabase: import.meta.env.VITE_APP_METABASE_SERVER_URL,
    export: `${import.meta.env.VITE_APP_API_SERVER_URL_EXPORT_EXCEL}/bcc`
}

export default APIConfig
