export default function Lab1(){
    return(
        <div id="wd-lab1">
            <h2>Lab1</h2>
            <h3>HTML Examples</h3>
            <div id="wd-h-tag">
                <h4>Heading Tags</h4>
            </div>
            <div id="wd-p-tag">
                <p id="wd-p-1">
                    This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one. This is the second paragraph. Even though we added a deliberate gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right. This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
                </p>
                <p id="wd-p-2">
                    This is the first paragraph. The paragraph tag is used to format vertical gaps between long pieces of text like this one.
                </p>
                <p id="wd-p-3">
                    This is the second paragraph. Even though we added a deliberate gap between the paragraph above and this paragraph, by default browsers render them as one contiguous piece of text as shown here on the right. 
                </p>
                <p id="wd-p-4">
                    This is the third paragraph. Wrap each paragraph with the paragraph tag to tell browsers to render the gaps.
                </p>
            </div>
            <div id="wd-lists">
                <h4>List Tags</h4>
                <h5>Ordered List Tags</h5>
                How to make pancakes:
                <ol id="wd-pancakes">
                    <li>Mix dry ingredients.</li>
                    <li>Add wet ingredients.</li>
                    <li>Stir to combine.</li>
                    <li>Heat a skillet or griddle.</li>
                    <li>Pour batter onto the skillet.</li>
                    <li>Cook until bubbly on top.</li>
                    <li>Flip and cook the other side.</li>
                    <li>Serve and enjoy!</li>
                </ol>
                My Favorite Recipe:
                <ol id="wd-my-favorite-recipe">
                    <li>Prepare the tomatoes</li>
                    <li>Beat the eggs</li>
                    <li>Cook the eggs</li>
                    <li>Cook the tomatoes</li>
                    <li>Combine eggs and tomatoes</li>
                    <li>Garnish and Serve</li>
                </ol>
                <h5>Unordered List Tag</h5>
                My favorite books(in no particular order)
                <ul id="wd-my-books">
                    <li>Dune</li>
                    <li>Lord of the Rings</li>
                    <li>Ender's Game</li>
                    <li>Red Mars</li>
                    <li>The Forever War</li>
                </ul>
                Your favorite books(in no particular order)
                <ul id="wd-your-books">
                    <li>To Kill a Mockingbird</li>
                    <li>1984</li>
                    <li>Pride and Prejudice</li>
                    <li>The Great Gatsby</li>
                    <li>Harry Potter and the Sorcerer's Stone</li>
                </ul>
            </div>
            <div id="wd-tables">
                <h4>Table Tag</h4>
                <table border={1} width="100%">
                    <thead>
                        <tr>
                            <th>Quiz</th>
                            <th>Topic</th>
                            <th>Date</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Q1</td>
                            <td>HTML</td>
                            <td>2/3/21</td>
                            <td>85</td>
                        </tr>
                        <tr>
                            <td>Q2</td>
                            <td>CSS</td>
                            <td>2/10/21</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q3</td>
                            <td>JavaScript</td>
                            <td>2/17/21</td>
                            <td>95</td>
                        </tr>
                        <tr>
                            <td>Q4</td>
                            <td>Dynamic Content</td>
                            <td>5/27/24</td>
                            <td>93</td>
                        </tr>
                        <tr>
                            <td>Q5</td>
                            <td>Reducers</td>
                            <td>6/3/24</td>
                            <td>91</td>
                        </tr>
                        <tr>
                            <td>Q6</td>
                            <td>Async Redux</td>
                            <td>6/10/24</td>
                            <td>90</td>
                        </tr>
                        <tr>
                            <td>Q7</td>
                            <td>MongoDB</td>
                            <td>6/17/24</td>
                            <td>87</td>
                        </tr>
                        <tr>
                            <td>Q8</td>
                            <td>Database Relations</td>
                            <td>6/20/24</td>
                            <td>98</td>
                        </tr>
                        <tr>
                            <td>Q9</td>
                            <td>3rd Party API</td>
                            <td>6/22/24</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>Q10</td>
                            <td>ChatGPT</td>
                            <td>6/25/24</td>
                            <td>88</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3}>Average</td>
                            <td>90</td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div id="wd-images">
                <h4>Image tag</h4>
                Loading and image from the internet
                <br />
                <img id="wd-starship" width="400px" 
                src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"/>
                <br />
                Loding a local image:
                <br />
                <img id="wd-teslabot" src="images/teslabot.jpg" height="200px" />
            </div>
            <div id="wd-forms">
                <h4>Form Elements</h4>
                <form id="wd-text-fields">
                    <h5>Text Fields</h5>
                    <label htmlFor="wd-text-fields-username">Username:</label>
                    <input id="wd-text-fields-username" placeholder="jdoe"/> <br />
                    <label htmlFor="wd-text-fields-password">Password:</label>
                    <input type="password" id="wd-text-fields-password" value="12345!@#$"/>
                    <br />
                    <label htmlFor="wd-text-fields-firstname">First name:</label>
                    <input type="text" id="wd-text-fields-firstname" /> <br />
                    <label htmlFor="wd-text-fields-lastname">Last name</label>
                    <input type="text" id="wd-text-fields-lastname" placeholder="Doe"
                    value="Wonderland" title="The last name" />
                </form>
                <h5>Text Boxes</h5>
                <label>Biography</label> <br />
                <textarea id="wd-textarea" cols={30} rows={10}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </textarea>
                <h5 id="wd-buttons">Buttons</h5>
                <button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">Hello World!</button>
                <h5>File Upload</h5>
                <input id="wd-upload" type="file" />
                <h5 id="wd-radio-buttons">Radio Buttons</h5>

                <label>Favorite Movie Genre:</label> <br />

                <input type="radio" name="radio-genre" id="wd-radio-comedy" />
                <label htmlFor="wd-radio-comedy">Comedy</label> <br />
                
                <input type="radio" name="radio-genre" id="wd-radio-drama" />
                <label htmlFor="wd-radio-drama">Drama</label> <br />

                <input type="radio" name="radio-genre" id="wd-radio-scifi" />
                <label htmlFor="wd-radio-scifi">Science Fiction</label> <br />

                <input type="radio" name="radio-genre" id="wd-radio-fantasy" />
                <label htmlFor="wd-radio-fantasy">Fantasy</label> <br />
            
                <h5 id="wd-checkboxes">Checkboxes</h5>
                <label>Favorite movie genre:</label> <br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-comedy" />
                <label htmlFor="wd-chkbox-comedy">Comdey</label> <br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-drama" />
                <label htmlFor="wd-chkbox-drama">Drama</label> <br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-scifi" />
                <label htmlFor="wd-chkbox-scifi">Science Fiction</label> <br />

                <input type="checkbox" name="check-genre" id="wd-chkbox-fantasy" />
                <label htmlFor="wd-chkbox-fantasy">Fantasy</label> <br />

                <h4 id="wd-dropdowns">Dropdowns</h4>
                <h5>Select One</h5>
                <label htmlFor="wd-select-one-genre">Favorite movie genre</label> <br />
                <select id="wd-select-one-genre">
                    <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>

                <h5>Select many</h5>
                <label htmlFor="wd-select-many-genre">Favorite movie genres:</label> <br />
                <select id="wd-select-many-genre" multiple>
                <option value="COMEDY">Comedy</option>
                    <option value="DRAMA">Drama</option>
                    <option selected value="SCIFI">Science Fiction</option>
                    <option value="FANTASY">Fantasy</option>
                </select>

                <h4>Other HTML field types</h4>
                <label htmlFor="wd-text-fields-email">Email:</label>
                <input type="email" placeholder="jdoe@somewhere.com" id="wd-text-fields-email" /> <br />

                <label htmlFor="wd-text-fields-salary-start">Starting salary:</label>
                <input type="number" id="wd-text-fields-salary-start" value="10000"/> <br />

                <label htmlFor="wd-text-fields-rating">Rating:</label>
                <input type="range" id="wd-text-fields-rating"
                placeholder="Doe"
                max="5"
                value="4"/> <br />

                <label htmlFor="wd-text-fields-dob">Date of birth:</label>
                <input type="date" id="wd-text-fields-dob" value="2001-01-21" /> <br />
            </div>
            <div id="anchor-tag">
                <h4>Anchor tag</h4>
                Please 
                <a id="wd-lipsum" href="https://www.lipsum.com"> click here </a> 
                to get dummy text<br />
                Please 
                <a id="wd-github" href="https://github.com/Shuna-tech/kanbas-react-web-app.git"> click here </a> 
                to get shuna's github<br />
            </div>
        </div>
    );
}