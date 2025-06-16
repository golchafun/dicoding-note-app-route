import React from "react";
import AddButton from "../components/AddButton";

function HomePage(){
    return(
        <section className="homepage">
        
            <h2>Catatan Aktif</h2>

            {/* akses notes list */}

            {/* button add note */}
            <div className="homepage__action">
                <AddButton />
            </div>
        </section>
    );
}

export default HomePage;