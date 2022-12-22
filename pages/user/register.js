import styles from '../../styles/register.module.css'

export default function register(){
    async function submit(e){
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);


        // Fetch Request
        await fetch("/api/user/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formProps)
        })

    }
    return(
        <>
            <div className={styles.div}>
            <h1>New user. Create new account</h1>
            <form onSubmit={submit} className={styles.form}>
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

