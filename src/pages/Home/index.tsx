import { useContext } from "react"
import { UserContext } from "../../providers/UserContext"

export const HomePage = () => {
    const { userLogout } = useContext(UserContext)

    return (
        <>
            <h1>home page</h1>
            <button onClick={() => userLogout()}>Sair</button>
        </>
    )
}