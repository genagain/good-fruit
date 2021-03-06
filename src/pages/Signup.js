function Signup() {
    return (
        <div className="mx-auto w-1/4">
        <h1 className="my-8 w-fit-content mx-auto" >Sign Up</h1>
            <form className="flex flex-col">
                <input className="my-1" type="text" placeholder="Username" />
                <input className="my-1"type="text" placeholder="Email" />
                <input className="my-1"type="password" placeholder="Password" />
                <input className="my-1"type="password" placeholder="Confirm Password" />
                <button className="my-1 btn-primary" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;