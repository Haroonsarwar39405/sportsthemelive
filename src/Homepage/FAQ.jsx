import  { Component } from 'react'

export default class FAQ extends Component {
    state = {
        items: [
            {
                Question: 'Who is behind esports.com?',
                Answer: 'The platform esports.com is led by gaming and esports enthusiasts. Our writers want to bring your gaming experience to the next level with the latest news, exclusive stories, and guides from the industry.',
                Hr:<hr/>
            },
            {
                Question: 'What is esports.com?',
                Hr:<hr/>
            },
            {
                Question: 'What kind of content does esports.com offer?',
                Hr: <hr />
            },
            {
                Question: 'Which company does esports.com belong to?',
                Hr: <hr />
            },
            {
                Question: 'In which languages does esports.com publish?',
                Hr: <hr />
            },
            {
                Question: 'What makes esports.com different?',
                Hr: <hr />
            },
            {
                Question: 'What is esports?',
                Hr: <hr />
            },
            {
                Question: 'Where can I find esports.com on Facebook?',
                Hr: <hr />
            },
            {
                Question: 'Where can I find esports.com on Instagram?',
                Hr: <hr />
            },
            {
                Question: 'Where can I find esports.com on Twitter?',
                Hr: <hr />
            },
            {
                Question: 'Where can I find esports.com on TikTok?',
                Hr: <hr />
            },
            {
                Question: 'Where can I find esports.com on YouTube?',
                Hr: <hr />
            },
            {
                Question: 'How can I support esports.com?',
                Hr: <hr />
            },
            {
                Question: 'What is the esports.com shop?',
                Hr: <hr />
            },
            
        ]
    }
  render() {
    return (
        <div className='py-[20px]'>
            <h1 className='text-[#FFD129] text-4xl px-[60px] pt-[30px] '>
                FAQ
            </h1>
            <div className='flex flex-col gap-5  pt-[50px] px-[80px] py-[30px]'>
                {this.state.items.map((item) => (
                    <div key={item.id} className='p-4'>
                        <h1 className='pt-[10px] text-white'>{item.Question}</h1>
                        <h2 className='pt-4'>{item.Hr}</h2>
                    </div>
                ))}
            </div>
            <button className='w-48 h-10 bg-[#FFD129] font-bold ml-[920px]'>
                ROCKET JUMP
            </button>
        </div>
        
    )
  }
}
