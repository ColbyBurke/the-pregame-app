import React from 'react'
import FilterDropdown from './FilterDropdown'
import InputBar from './InputBar'
import {Link} from 'react-router-dom'

export default function DisplayEvents(){
    return(
        <div className='displayEvents-container'>
            <h3>Search for events using filters like age, upcoming, or popular</h3>
            <FilterDropdown></FilterDropdown>
            <InputBar></InputBar>
            <div className="displayEvents-placeholder">
                <h1>Harbor party</h1>
                <Link to='/events/details'>details</Link>
            <p>Lorem ipsum dolor sit amet, vulputate aliquam ut dolor. Ut quisque molestiae leo, sem eget quis, varius magna urna et nostra, cursus donec volutpat tristique pede vestibulum. Pede vitae duis sodales leo, massa quis proin faucibus magna nam. Erat laoreet, congue nec eget odio. Sem luctus montes nibh eget est eget, dapibus cras risus aliquam turpis ac id. Neque justo justo, laoreet luctus tellus vehicula aliquam a, ligula maecenas vestibulum suspendisse esse urna vel, magna pretium magna litora nibh. Tellus ac adipiscing placerat natoque quam sollicitudin, suscipit porta sit. Magna fusce commodo, suspendisse facilisis, aenean eget bibendum nam dolor aliquam. Et mauris lorem ultricies a, sit dapibus turpis consectetuer et sed. Nulla lacus aliquet eros tempor, eu eros morbi risus. Eros neque tincidunt adipiscing neque, etiam euismod in nascetur condimentum elementum morbi, placerat consequat laoreet ultricies, nec non donec in turpis in diam, suscipit condimentum ligula etiam et. Porta alias nam cras quam, luctus elit morbi augue ipsum suspendisse. Id ullamcorper placerat dui id commodo gravida, amet cum velit, viverra vel auctor volutpat imperdiet egestas, nunc vel auctor mus eros vel. Libero in, et tellus semper taciti, sed donec lectus sodales amet. Dapibus pulvinar et vestibulum ipsum quam, et dui amet bibendum at cum habitant, viverra pellentesque quam risus in vestibulum, felis felis, pellentesque integer ut cras tempor eget. Proin est amet, ipsum sodales neque mi amet ullam, primis imperdiet sed, ipsum at pellentesque pede praesent curabitur eget, lacus pellentesque rhoncus. Aliquam consectetuer a vestibulum pulvinar venenatis dictumst, aliquam vestibulum mi massa et quam.</p>

            </div>
        </div>
    )
}