
const userRoutes = (app, fs) => {
    const dataPath = './api/list.json';
    app.post('/list', (req, res) => {
        fs.readFile(dataPath, 'utf8', (err, data) => {
            if (err) {
                throw err;
            }
            else {

                const input =JSON.parse(data);
                let result=[];
                let visited={};
                for(let i=0;i<input.length; i++){
                    if(visited[input[i].id]){
                        visited[input[i].id].push(input[i].type);
                    }else{
                        visited[input[i].id]=[input[i].type];
                    }
                }
                for (const data in visited) {
                    result.push({id:data,type:visited[data]});
                }
                res.send(result);

            }
            res.send(JSON.parse(data));
        });
    });
};

module.exports = userRoutes;
