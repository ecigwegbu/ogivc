const resetResdata = (setResdata) => {
    // console.log(`Before setResdata reset ${Object.keys(setResdata)}`);
    // setResdata.setCgr();
    Object.keys(setResdata).forEach((key) => {
        setResdata[key]('');
    });
    setResdata.setBoi(1);
    setResdata.setReservoirType('both');
    setResdata.setSwco('');
    // alert(`After Resdata reset. CGR=${resdata.cgr}`);
}

export default resetResdata