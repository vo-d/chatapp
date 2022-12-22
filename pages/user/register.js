import styles from '../../styles/register.module.css'

export default function register(){
    return(
        <>
            <div className={styles.div}>
            <h1>New user. Create new account</h1>
            <form action="/user/createUser" method="post" id="form2" className={styles.form}>
                    <div>
                        <label>Username: 
                            <input type="text" name="user" id="new_user_id"></input>
                        </label>
                        <br/>
                        <br/>
                        <label>Password:  
                            <input type="text" name="password" id="new_password"></input>
                        </label>
                        <br/>
                        <br/>
                    </div>
                    <input type="submit" value = "Submit"></input>
                </form>
            </div>
        </>
    )
}

