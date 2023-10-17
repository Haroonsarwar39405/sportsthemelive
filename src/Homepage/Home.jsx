import  { Component } from 'react'
import Navbar from './Navbar'
import Mininav from './Mininav'
import Latestnews from './Latestnews'
import Topgames from './Topgames'
import Topgamescard from './Topgamescard'
import Img from "../Img/lol.jpg";
import Img1 from "../Img/csgo.jpg";
import Img2 from "../Img/valorant.jpg";
import Img3 from "../Img/dota.jpg";
import Img4 from "../Img/cod.jpg";
import Img5 from "../Img/Pokemon.jpg";
import Img6 from "../Img/gaming_en-mittig-1.jpg";
import Specialgames from './Specialgames'
import Specialdealscards from './Specialdealscards'
import img from "../Img/Best-Gaming-Keyboards-967x544.jpg";
import img1 from "../Img/Best-Gaming-Mice-350x197.jpg";
import img2 from "../Img/Header_Gaming-Desks-below-150-EN-350x197.jpg";
import img3 from "../Img/best-SSDs-350x197.jpg";
import League from './League'
import Legendcards from './Legendcards'
import CS from './CS'
import CScards from './CScards'
import Volarant from './Volarant'
import Volarantcards from './Volarantcards'
import images from "../Img/FPX-not-competing-at-vct-masters-350x197.jpg";
import images1 from "../Img/VCT-Masters-might-not-feature-russian-players-350x197.jpg";
import images2 from "../Img/Cypher-VALORANT-removed-temporarily-350x197.jpg";
import images3 from "../Img/Rawkus-350x197.jpg";
import Dota from './Dota'
import Dotacards from './Dotacards'
import imges from "../Img/Sea-DPC-banned-accounts-350x197.jpg";
import imges1 from "../Img/Hellraisers-suspend-operations-350x197.jpg";
import imges2 from "../Img/Gamers-Galaxy-Dota-2-Virtus-Pro-350x197.jpg";
import imges3 from "../Img/FMryM1aWYAMRt7S-350x197.jpg";
import Callduty from './Callduty'
import Calldutycards from './Calldutycards'
import Callimges from "../Img/Warzone-season-2-reloaded-merges-gamemodes-350x197.jpg";
import Callimges1 from "../Img/mp5-loadout-rebirth-island-350x197.jpg";
import Callimges2 from "../Img/Snoop-dogg-joins-call-of-duty-350x197.jpg";
import Callimges3 from "../Img/warzone-pacific-season-2-reloaded-350x197.jpg";
import Gaming from './Gaming'
import Gamingcard from './Gamingcard'
import Entertainment from './Entertainment'
import Entercards from './Entercards'
import Entimges from "../Img/Snoop-dogg-joins-call-of-duty-350x197.jpg";
import Entimges1 from "../Img/Asmongold-criticizes-Dr-Disrespect-on-NFT-350x197.jpg";
import Entimges2 from "../Img/drdis-350x197.jpg";
import Entimges3 from "../Img/Dr-Disrespect-to-launch-own-gaming-studio-350x197.jpg";
import News from './News'
import Newscard from './Newscard'
import FAQ from './FAQ'
import Lastsec from './Lastsec'
import Footer from './Footer'


export default class Home extends Component {
  render() {
    return (
      <>
        <div>
            <Navbar />
            <Mininav />
          <Latestnews />  
          <Topgames/>
      </div>
      <div className='flex justify-evenly gap-6 pt-[30px] px-[30px]'>
          <Topgamescard pic={Img} name="League of Legends" />
          <Topgamescard pic={Img1} name="CS:GO" />
          <Topgamescard pic={Img2} name="VALORANT" />
          <Topgamescard pic={Img3} name="DOTA 2" />
          <Topgamescard pic={Img4} name="Call of Duty" />
          <Topgamescard pic={Img5} name="Pokémon" />
          <Topgamescard pic={Img6} name="Everything Gaming and more..." />
        </div>
        <Specialgames />
        <div className='pt-[30px] flex justify-evenly'>
          <Specialdealscards pic={img} heading="Gaming Gear – The 5 best Gaming Keyboards" para=" Looking for a new gaming keyboard but unsure where to look? Let’s take a look at some of the top picks out there!" />

          <Specialdealscards pic={img1} heading="Gaming Gear – The 5 best gaming mice
" para=" Looking for a new gaming mouse but unsure where to look? Let’s take a look at some of the top picks out there!" />

          <Specialdealscards pic={img2} heading="Gaming Gear – The 5 best Gaming Desks for your setup
" para=" Do you need a Gaming Desk? We think that you should grab one! Here is everything you need to know about their advantages and the best models." />
          
          <Specialdealscards pic={img3} heading="Gaming Gear – The 5 best SSDs for Gaming
" para=" Which SSDs are the most fitting for Gamers? Here are the Top 5 for every price range and specifications you require." />
        </div>
        <League />
        <Legendcards />
        <CS />
        <CScards />
        <Volarant />
        <div className='pt-[30px] flex justify-evenly'>
          <Volarantcards pic={images} heading="Team Liquid to replace FunPlus Phoenix at VCT Masters Reykjavik" para=" What many people have feared turned into reality, as FunPlus Phoenix is unable to participate at VCT Masters Reykjavik due to the war in Ukraine." />

          <Volarantcards pic={images1} heading="Russian VALORANT players likely can’t compete at VCT Masters
" para=" According to recent rumors, Russian players might not be able to participate during VCT Masters." />

          <Volarantcards pic={images2} heading="VALORANT Bug party continues – Astra returns as Cypher breaks the game
" para=" VALORANT players are currently unable to play as Cypher due to a game-breaking bug. In the meantime, Astra returns to the field." />

          <Volarantcards pic={images3} heading="Rawkus is no longer coaching Sentinels
" para=" Rawkus took to Twitter last night to announce he’s no longer coaching Sentinels.  The announcement came immediately after Sentinels lost the first map in their NA VCT Challengers One matchup against OpTic 2-13." />
        </div>
        <Dota />

        <div className='pt-[30px] flex justify-evenly'>
          <Dotacards pic={imges} heading="After investigation in SEA DPC Qualifier: 10 players, including VtFaded, banned from Valve events" para=" Things have taken a big turn following the SEA DPC Open Qualifier, as ten players out of Team Orca and Apex have been banned from Valve events." />

          <Dotacards pic={imges1} heading="Hellraisers decide to suspend operations during war in Ukraine
" para=" Esports organization Hellraisers has released a statement saying they’ll be suspending operations for the duration of the current war in Ukraine." />

          <Dotacards pic={imges2} heading="VALORANT Bug party continues – Astra returns as Cypher breaks the game
" para="VALORANT players are currently unable to play as Cypher due to a game-breaking bug. In the meantime, Astra returns to the field." />

          <Dotacards pic={imges3} heading="Rawkus is no longer coaching Sentinels
" para=" Rawkus took to Twitter last night to announce he’s no longer coaching Sentinels.  The announcement came immediately after Sentinels lost the first map in their NA VCT Challengers One matchup against OpTic 2-13." />
        </div>
        <Callduty />
        
        <div className='pt-[30px] flex justify-evenly'>
          <Calldutycards pic={Callimges} heading="Warzone Season 2 reloaded merges Vanguard Royale and Battle Royale" para=" The Warzone developers have shared some updates on what we can expect in Season 2 reloaded, including merging Vanguard Royale and regular Battle Royale." />

          <Calldutycards pic={Callimges1} heading="Warzone Pro FaZe.Booya shows off MP5 loadout for Rebirth Island
" para=" FaZe's Call of Duty Pro Booya shows us his newest MP5 Loadout for Rebirth Island in his recent YouTube video. Check it out!" />

          <Calldutycards pic={Callimges2} heading="Is Snoop Dogg making his way into Call of Duty?
" para="A new teaser posted by the Call of Duty account might hint towards rapper and entertainer Snoop Dogg joining.
" />

          <Calldutycards pic={Callimges3} heading="Warzone Pacific Season 2 Reloaded – What we can expect from the next update
" para=" The Reloaded patch is coming soon to Warzone Pacific's Season 2. Here is what we can expect from the update." />
        </div>
        <Gaming />
        <Gamingcard />
        <Entertainment />
        
        <div className='pt-[30px] flex justify-evenly'>
          <Entercards pic={Entimges} heading="Is Snoop Dogg making his way into Call of Duty?" para=" A new teaser posted by the Call of Duty account might hint towards rapper and entertainer Snoop Dogg joining." />

          <Entercards pic={Entimges1} heading="Asmongold criticizes Dr Disrespect after he gives out NFT for his upcoming new game
" para=" After Dr Disrespect announced an NFT which links back to his game development company and new game, Asmongold wasn’t a fan." />

          <Entercards pic={Entimges2} heading="Dr. Disrespect and Twitch resolve legal dispute surrounding ban
" para="The saga between Dr. Disrespect and Twitch following his permanent ban is seemingly over as both parties have settled the legal dispute..
" />

          <Entercards pic={Entimges3} heading="Dr Disrespect’s YouTube numbers are up, show impressive growth throughout 2021
" para="It’s been two years since the infamous Twitch ban, but the Doc has seemingly found his stride on YouTube, and the numbers don’t lie." />
        </div>
        <News />
        <Newscard />
        <FAQ />
        <Lastsec />
        <Footer/>
        
      </>
    )
  }
}
