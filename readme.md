# ZoloStays
ZoloStays Login and Booking Management

<b>Web App Requirements</b>
<br>
<b>Guest Login</b>
<ol>
<li>Once the user opens the application, the user should be asked for his/her email id and password for authentication.</li>
<li>On successful authentication, the user should be redirected to the “Book a room” page.</li>
<li>If the authentication was not successful, there is should be an error message saying, “Authentication Failed. Please try again.”</li>
</ol>
<br>
<b>Book a Room</b>
<ol>
<li>For searching a meeting room, the user has to select a date from a datepicker and
number of seats from a select box. </li>
<li>After entering the details and clicking on search, the user will be taken to the results page.</li>
<li>In the results page, the available rooms are displayed in a card format. The card should have a title, image, maximum number of seats and a call to action to book the room.</li>
<li>On clicking the book now button, the room should be booked.</li>
</ol>
<b>My Bookings</b>
<ol>
<li>My Bookings page will have all the bookings made by the user. The data should be
shown in card format. A card should have the following items displayed.
<ol>
<li>Room Name</li>
<li>Image</li>
<li>No. of seats booked</li>
<li>Booked for date</li>
<li>Booked on date</li>
<li>Call to action to edit.</li>
</ol>
<li>On clicking the edit button, the user should be given a form to edit the date of booking.</li>
<li>If the user selects a date on which the room is already booked, there should be an error saying that the “This room is already booked on the selected date.”</li>
</ol>
<br>
<b>Technologies Used</b>
<ol>
<li>Server Side and API : Node and Express JS.</li>
<li>Database : MongoDB (Mlab)</li>
<li>Client Side : ReactJs</li>
</ol>