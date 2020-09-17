document.addEventListener('DOMContentLoaded', async (e) =>{
    if (localStorage.getItem('Token')){
        let token = localStorage.getItem('Token')
        
        try {

            let options = {
                method:"GET",
                headers: {
                    'Authorization' : `Token ${token}`
                }
            }

            let res = await fetch(`http://127.0.0.1:8000/${token}`, options)

            let json = await res.json()

            if(json.length === 0) throw new Error("ERROR")

        }catch(error){
            localStorage.removeItem('Token');
            localStorage.removeItem('rol');
            window.location.href = '/'
        }
    }
})