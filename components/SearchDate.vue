<template>
  <div class="box-date">
    <div class="date">
      <input type="date" id="start" name="trip-start" min="2022-01-01">
      <input type="date" id="end" name="trip-end" min="2022-01-01">
    </div>
    <button class="SearchBtn">Rechercher</button>
  </div>
</template>

<style scoped>

.box-date{

  display: flex;
  justify-content: space-between;
  margin-top: 30px;
  background: rgba(255, 255, 255, 0.44);
  width: 100%;
  height: 70px;
  border-radius: 10px;

}

.date{
  display: flex;
  justify-content: flex-start;
}

.date input {
  position: relative;
  outline: none;
  color: white;
  font-size: 20px;
  text-align: center;
}

#start:after {
  content: "DEBUT";
  position: absolute;
  color: white;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}

#start{

  width: 150px;
  background:#1497F6;
  border:4px solid;
  border-color: #7FC8FC;
  border-radius: 10px 0 0 10px;

}
#end{

  width: 150px;
  background:#1497F6;
  border:4px solid;
  border-color: #7FC8FC;
  border-radius: 0px 10px 10px 0px;
}

.SearchBtn{

  background: #4BD960;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 20px;
  text-align: center;
  color: white;
  border-radius: 0 10px 10px 0;
  border: none;
}

@media screen and (max-width: 900px){
    .box-date{
      width: 100%;
    }
  }

  @media screen and (max-width: 600px){
    .box-date{
      width: 100%;
    }
  }
  @media screen and (max-width: 450px){
    .date{
      width: 65%;
    }
    .SearchBtn{
      width: 35%;
      font-size: 17px;
    }
    .date input {
  font-size: 13px;
}
  }
</style>
