function echoType(parameter) {
    const parameterType = typeof parameter;
    
    console.log(parameterType);

    if(parameterType === 'string' || parameterType === 'number') {
        console.log(parameter);
    } else {
        console.log('Parameter is not suitable for printing');
    }
    
}
echoType(null)