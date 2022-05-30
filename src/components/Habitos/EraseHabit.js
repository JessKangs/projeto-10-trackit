export default function EraseHabit () {

        const resquest =  axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/ID_DO_HABITO', config);
    
        resquest.then(resposta => {
           console.log(resposta.data)
        })
        
                

    
}