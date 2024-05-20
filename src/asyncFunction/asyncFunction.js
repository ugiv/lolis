// import { useNavigate } from "react-router-dom";
export const getData = async (handleData) => {
    try {
        const req = await fetch('http://localhost:8154/get/todo_list', {
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
export const addTodoList = async (data) => {
    console.log(data);
    try {
        const req = await fetch('http://localhost:8154/add/todo_list', {
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
        await fetch('http://localhost:8154/logout', {
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
        const req = await fetch('http://localhost:8154/delete/todo_list', {
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
    const req = await fetch("http://localhost:8154/signup", {
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
        const request = await fetch('http://localhost:8154/login', {
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
        await fetch('http://localhost:8154/update/todo_list/status', {
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