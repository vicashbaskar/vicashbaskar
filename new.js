let keys= Object.keys(data);
for(i=0;i<keys.length;i++){
    for(j=0;j<data.keys[i].length;j++){
        console.log(keys[i] + ": "+data.keys[i][j].firstName);
    }
}