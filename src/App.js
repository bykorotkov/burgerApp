import './App.css';
import { useEffect, useState } from 'react';
import pathBigBurger from './images/big-burger.jpg';
import pathTwo from './images/burger.jpg'

const MEAT = [
  {id: '1', name: 'Говядина'},
  {id: '2', name: 'Свинина'},
  {id: '3', name: 'Курица'},
  {id: '4', name: 'Рыба'},
]

const CHEESE = [
  {id: '1', name: 'Моцарелла'},
  {id: '2', name: 'Пармезан'},
  {id: '3', name: 'Чеддер'},
  {id: '4', name: 'Гауда'},
  {id: '5', name: 'Рокфор'},
  {id: '6', name: 'Дор Блю'},
]

const SAUCES = [
  {id: '1', name: 'Кетчуп'},
  {id: '2', name: 'Майонез'},
  {id: '3', name: 'Сырный'},
  {id: '4', name: 'Чесночный'},
  {id: '5', name: 'Медово-горчичный'},
  {id: '6', name: '1000 Островов'},
  {id: '7', name: 'Барбекю'},
  {id: '8', name: 'Чипотл-саусвест'},
  {id: '9', name: 'Тартар'},
  {id: '10', name: 'Терияки'},
  {id: '11', name: 'Горчица'},
  {id: '12', name: 'Чили'},
]

const App = () => {

  const [meat, setMeat] = useState(MEAT[0].id);
  const [cheese, setCheese] = useState(CHEESE[0].id);
  const [sauce, setSauce] = useState(SAUCES[0].id);
  const [hasOnion, setHasOnion] = useState(false);
  const [countTomatoes, setCountTomatoes] = useState(2);
  const [countCucumbers, setCountCucumbers] = useState(2);
  const [hasOrdered, setHasOrdered] = useState(false);
  const [resetName, setResetName] = useState('');
  const [resetMail, setResetMail] = useState('');
  const [resetTph, setResetTph] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tnumber, setTnumber] = useState('');
  const [nameDirty, setNameDirty] = useState('');
  const [emailDirty, setEmailDirty] = useState('');
  const [tnumberDirty, setTnumberDirty] = useState('');
  const [nameError, setNameError] = useState('Поле не может быть пустым');
  const [emailError, setEmailError] = useState('Поле не может быть пустым');
  const [tnumberError, setTnumberError] = useState('Поле не может быть пустым');
  const [formValid, setFormValid] = useState(false);


  useEffect(() => {
      if(nameError || emailError || tnumberError) {
        setFormValid(false)
      } else {
        setFormValid(true)
      }
  }, [nameError, emailError, tnumberError])


  const handleChangeMeat = (event) => {
      setMeat(event.target.value);
  }

  const handleChangeSauce = (event) => {
    setSauce(event.target.value);
}

  const handleChangeCheese = (event) => {
      setCheese(event.target.value)
  }

  const handleIncreaseCountTomatoes = (event) => {
      event.preventDefault()
      setCountTomatoes(prevValue => prevValue >= 4 ? 4 : prevValue + 1)
  }
  
  const handleDecreaseCountTomatoes = (event) => {
    event.preventDefault()
      setCountTomatoes(prevValue => prevValue <= 0 ? 0 : prevValue - 1)
  }

  const handleIncreaseCountCucumbers = (event) => {
    event.preventDefault()
    setCountCucumbers(prevValue => prevValue >= 4 ? 4 : prevValue + 1)
}

  const handleDecreaseCountCucumbers = (event) => {
    event.preventDefault()
      setCountCucumbers(prevValue => prevValue <= 0 ? 0 : prevValue - 1)
  }

  const handleSubmitButton = (event) => {
    event.preventDefault()
      setHasOrdered(!hasOrdered)
  }

  const handleOnionChange = () => {
    setHasOnion(!hasOnion);
  }

  const handleResetButtuon = (event) => {
    event.preventDefault()
    setResetName('')
    setResetMail('')
    setResetTph('')
    setCountCucumbers(2)
    setCountTomatoes(2)
    setHasOnion(false)
    setMeat(MEAT[0].id)
    setEmail('')
    setName('')
    setTnumber('')
    setFormValid(false)
    setNameError('Поле не может быть пустым')
    setEmailError('Поле не может быть пустым')
    setTnumberError('Поле не может быть пустым')
  }

  const handleChangeName = (e) => 
    setResetName(e.target.value)

  const handleChangeMail = (e) => 
    setResetMail(e.target.value)

  const handleChangeTph = (e) => 
    setResetTph(e.target.value)


  const nameHandler = (e) => {
    setName(e.target.value)
    if(e.target.value.length < 2) {
      setNameError('Имя должно содержать не менее одного символа')
      if(!e.target.value) {
        setNameError('Имя должно содержать не менее одного символа')
      }
    } else {
      setNameError('')
    }
  }
  
  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if(!re.test(String(e.target.value).toLowerCase())) {
        setEmailError('Некорректный email')
    } else {
        setEmailError('')
    }
  }

  const tnumberHandler = (e) => {
    setTnumber(e.target.value)
    if(e.target.value.length < 11 || e.target.value.length > 11  ) {
      setTnumberError('Некорректно введенный номер телефона')
    } else {
      setTnumberError('')
    }
  }

  const blurHandler = (e) => {
      switch (e.target.name) {
        case "name":
            setNameDirty(true)
            break
        case "email":
            setEmailDirty(true)
            break
        case "tnumber":
            setTnumberDirty(true)
            break
        
      }
  }

  return (
    <section>
      <div className="form-app"> 
        {!hasOrdered && <form className='form-app__form'>
          <h2>Заполните свои данные</h2>
          <div className='contact-information' >
              <div className='field-input'  >
                <p>Имя</p>
                {(nameDirty && nameError) && <div style={{color:'red', fontSize:'14px'}}>{nameError}</div>}
                <input onBlur={e => blurHandler(e)} required type="text" name='name' value={resetName, name} onChange={handleChangeName,nameHandler} placeholder='Введите ваше имя...'/>
              </div>
              <div className='field-input' >
                <p>Почта</p>
                {(emailDirty && emailError) && <div style={{color:'red', fontSize:'14px'}}>{emailError}</div>}
                <input  onBlur={e => blurHandler(e)} required type="text" name='email' value={resetMail, email} onChange={handleChangeMail, emailHandler} placeholder='Введите вашу почту...'/>
              </div>
              <div className='field-input' >
                <p>Телефон</p>
                {(tnumberDirty && tnumberError) && <div style={{color:'red', fontSize:'14px'}}>{tnumberError}</div>}
                <input onBlur={e => blurHandler(e)} required type="text" name='tnumber' value={resetTph, tnumber} onChange={handleChangeTph, tnumberHandler} placeholder='Введите ваше номер...'/>
              </div>
          </div>
          <div className='selection'>
              <p className='selection__text'>Выбор котлеты:</p>
              <select onChange={handleChangeMeat}>
                  {MEAT.map(elem => <option key={elem.id} value={elem.id}>{elem.name}</option>)}
              </select>
              
              <p className='selection__text'>Выбор сыра:</p>
              <select onChange={handleChangeCheese}>
                  {CHEESE.map(elem => <option key={elem.id} value={elem.id}>{elem.name}</option>)}
              </select>
              
              <p className='selection__text'>Выбор соуса:</p>
              <select onChange={handleChangeSauce}>
                  {SAUCES.map(elem => <option key={elem.id} value={elem.id}>{elem.name}</option>)}
              </select>

              <p className='selection__text'>Количество ломтиков помидора:</p>
              <div className='number'>
                  <button className='number-minus' onClick={handleDecreaseCountTomatoes}>-</button>
                  <input type="number" value={countTomatoes} readOnly/>
                  <button className='number-plus' onClick={handleIncreaseCountTomatoes}>+</button>
              </div>

              <p className='selection__text'>Лук:</p>
              <div className='selection__container'>
                  <div className='field-input'>
                    <input type="checkbox" name='onion' value checked={hasOnion} onChange={handleOnionChange}/>
                  </div>
              </div>

              <p className='selection__text'>Количество ломтиков огурца:</p>
              <div className='number'>
                  <button className='number-minus' onClick={handleDecreaseCountCucumbers}>-</button>
                  <input type="number" value={countCucumbers} readOnly/>
                  <button className='number-plus' onClick={handleIncreaseCountCucumbers}>+</button>
              </div>
              
              {<div style={{color:'red', fontSize:'14px'}}>{}</div>}
              <button disabled={!formValid} className='affirmation' type='submit' onClick={handleSubmitButton}>Оформить заказ</button>
              <button className='affirmation' type='submit' onClick={handleResetButtuon}>Сбросить</button>
       
          </div>
          <img className="image-decoration" src={pathBigBurger} alt="Иконка бургера"/>

        </form>}

        {hasOrdered &&<div className='modal-window'>
            <h2>Ваш бургер готовится</h2>
            <p>Имя: {name}</p>
            <p>Почта: {email}</p>
            <p>Телефон: {tnumber}</p>
            <p>Котлета: {MEAT.find(elem => elem.id === meat)?.name}</p>
            <p>Сыр: {CHEESE.find(elem => elem.id === cheese)?.name}</p>
            <p>Соус: {SAUCES.find(elem => elem.id === sauce)?.name}</p>
            <p>Лук: {hasOnion ? 'Есть' : 'Нет'}</p>
            <p>Количество ломтиков помидора: {countTomatoes}</p>
            <p>Количество ломтиков огурца: {countCucumbers}</p>
            <img className='modal-img' width={300} src={pathTwo} alt="Фото бургеров"/>
            <button onClick={handleSubmitButton}>Сделать еще один заказ</button>
        </div>}
      </div>
    </section>
  );
}

export default App;
