// import { useNavigate } from "react-router-dom";
export const getData = async (handleData) => {
    try {
        const req = await fetch('https://lolis-backend-72rvflynbq-et.a.run.app/get/todo_list', {
            method: 'GET',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        });
        const response = await req.json();
        if (response.status === 'ok'){
            handleData(response.response)
        }
    } catch(err) {
        console.log(err);
    }
}

export const getUserName = async (handleData) => {
    try {
        const req = await fetch('https://lolis-backend-72rvflynbq-et.a.run.app/get/users/name', {
            method: "GET",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        const response = await req.json();
        if (response.status === 'ok'){
            handleData(response.response);
        }
    } catch (error) {
        console.log(error)
    }
}
export const addTodoList = async (data) => {
    try {
        const req = await fetch('https://lolis-backend-72rvflynbq-et.a.run.app/add/todo_list', {
            method: 'POST',
            mode: 'cors',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        });
        const response = await req.json();
        if (response.status === "ok"){
            window.location.reload();
        }
    } catch (err) {
        console.log(err)
    }
}
export const logout = async (navigate) => {
    try {
        await fetch('https://lolis-backend-72rvflynbq-et.a.run.app/logout', {
            method: 'GET',
            credentials: 'include',
        })
        navigate("/login");
    } catch (err){
        console.log(err)
    }
}
export const deleteTodoList = async (id) => {
    try {
        const req = await fetch('https://lolis-backend-72rvflynbq-et.a.run.app/delete/todo_list', {
            method: "DELETE",
            mode: 'cors',
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({id: id})
        });
        const response = await req.json();
        if (response.status === "ok"){
            window.location.reload();
        }
    } catch (error){
        console.log(error)
    }
}

export const signupAsync = async (data, navigate) => {
    const req = await fetch("https://lolis-backend-72rvflynbq-et.a.run.app/signup", {
        method: "POST",
        mode: "cors",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(data)
    });
    const response = await req.json();
    if (response.status === "ok"){
        navigate("/login")
    }
}

export const loginAsync = async (userData, navigate) => {
    try {
        const request = await fetch('https://lolis-backend-72rvflynbq-et.a.run.app/login', {
            method: "POST",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userData)
        });
        const response = await request.json();
        if (response.status === "ok"){
            navigate('/dashboard')
        }
    } catch(err){
        throw err
    }
}

export const updateStatus = async (newStatus) => {
    try {
        await fetch('https://lolis-backend-72rvflynbq-et.a.run.app/update/todo_list/status', {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body: JSON.stringify(newStatus)
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateTitle = async (newTitle) => {
    try {
        await fetch('https://lolis-backend-72rvflynbq-et.a.run.app/update/todo_list/title', {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(newTitle)
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateDescription = async (newDescription) => {
    try {
        await fetch('https://lolis-backend-72rvflynbq-et.a.run.app/update/todo_list/description', {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": 'application/json',
                "Accept": "application/json"
            },
            body: JSON.stringify(newDescription)
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateDate = async (data) => {
    try {
        await fetch('https://lolis-backend-72rvflynbq-et.a.run.app/update/todo_list/date', {
            method: "PUT",
            mode: "cors",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }
}