import { useTheme } from 'next-themes'
import React, { useState, useEffect } from "react";
import { Button} from '@fluentui/react-components';
import {Guardian24Filled, Beach24Filled, Accessibility24Regular, Home24Regular, NotepadPerson24Regular } from '@fluentui/react-icons';


export default function BigNav() {
    const { theme, setTheme } = useTheme();
    const [dark, darkTheme] = useState('show');

    const [ light, lightTheme] = useState('hidden');
  
  function inverted() {
    theme === 'light' ? darkTheme('show') : darkTheme('hidden')
    theme === 'light' ? lightTheme('hidden') : lightTheme('show')
    
  }
  useEffect(() => {
    inverted()
  });
    return(
     
   <div style={{textAlign: 'center'}} className="inline-block">

    <Button  style={{width: '125px', height: '35px'}}  appearance="transparent" icon={<Home24Regular /> }>
      <a href='/'>首页</a>
    </Button>
    
   <Button style={{width: '250px', height: '35px'}} className='width: 400px, height: 300px'   appearance="transparent" icon={<Accessibility24Regular /> }>
      <a href='ChinaPrior'>中国（超值特价）</a>
    </Button>

    <Button style={{width: '250px', height: '35px'}} className='width: 400px, height: 300px'   appearance="transparent" icon={<Guardian24Filled /> }>
      <a href='ChinaBest'>中国（纯玩无购物）</a>
    </Button>

   <Button style={{width: '125px', height: '35px'}} className='width: 200px, height: 300px'   appearance="transparent" icon={<Beach24Filled /> }>
      <a href='Asia'>亚洲</a>
    </Button>

    <Button style={{width: '125px', height: '35px'}} className='width: 200px, height: 300px'   appearance="transparent" icon={<NotepadPerson24Regular /> }>
      <a href='Contact'>联系我们</a>
    </Button>


   </div>

        
    )
}
