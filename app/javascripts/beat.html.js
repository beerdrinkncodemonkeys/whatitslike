'use strict';

import { View } from './view.html';

export class Beat extends View {

    constructor() {
        super( `
                <div class='beat'>
                    <table class='table table-responsive'>
                        <thead>
                            <tr>
                                <th>Year</th>
                                <th>Crime</th>
                                <th>Count</th>
                            </tr>
                        <tbody>
                            <tr>
                                <th scope="row">2015</th>
                                <td>Murder</td>
                                <td>6</td>
                            </tr>                    
                            <tr>
                                <th scope="row">2015</th>
                                <td>Murder</td>
                                <td>6</td>
                            </tr>                    
                            <tr>
                                <th scope="row">2015</th>
                                <td>Murder</td>
                                <td>6</td>
                            </tr>                    
                            <tr>
                                <th scope="row">2015</th>
                                <td>Murder</td>
                                <td>6</td>
                            </tr>                    
                            <tr>
                                <th scope="row">2015</th>
                                <td>Murder</td>
                                <td>6</td>
                            </tr>                    
                            <tr>
                                <th scope="row">2015</th>
                                <td>Murder</td>
                                <td>6</td>
                            </tr>                    
                        </tbody>
                        </thead>
                    </table>
                </div>

            `);
    }
}