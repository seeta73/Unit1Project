import Event from "./Event";

const Calendar = () => {
    return (
        <><div className="Calendar"></div>
            <table>
                <thead>
                    <tr>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event="1 - Farmers Market" location="Downtown Westlake" color="green" />
                        <td>2</td>
                        <Event event="3 - Bingo" location="Adventure Park" color="blue" />
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                        <td>8</td>
                        <td>9</td>
                        <Event event="10 - Blood Drive" location="Lodge" color="red" />
                    </tr>
                    <tr>
                        <Event event="11 - Chick-Fil-A" location="Lodge" color="green" />
                        <td>12</td>
                        <Event event="13 - Dance with Me" location="Lodge" color="blue" />
                        <td>14</td>
                        <td>15</td>
                        <Event event="16 - Karaoke Dinner" location="Downtown Westlake" color="green" />
                        <td>17</td>
                    </tr>
                    <tr>
                        <td>18</td>
                        <td>19</td>
                        <td>20</td>
                        <Event event="21 - Zumba" location="Lodge" color="blue" />
                        <Event event="22 - Mobile Clinic" location="Lodge" color="red" />
                        <Event event="23 - Movie Night" location="Lodge" color="blue" />
                        <td>24</td>
                    </tr>
                    <tr>
                        <Event event="25 - Sunday Brunch" location="Town Center" color="green" />
                        <td>26</td>
                        <td>27</td>
                        <td>28</td>
                        <td>29</td>
                        <td>30</td>
                        <Event event="31 - Pool Kickoff" location="Adventure Park" color="blue" />
                    </tr>

                </thead>
            </table></>

    )
}

export default Calendar;