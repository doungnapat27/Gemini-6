import React, { Component } from 'react';
import styles from './styles/createSciplan.module.css'; 
// import CSS file

class CreateSciPlan extends Component {
    // ---------------------------------------------- CONSTRUCTOR----------------------------------------------------
    constructor(props) {
        super(props);
        this.state = {
            creator: "",
            submitter: "",
            fundingInUSD: "",
            objectives: "",
            starSystem: "",
            startDate: ""+" 00:00:00",
            endDate: ""+" 00:00:00",
            telescopeLocation: "",
            fileType: "",
            fileQuality: "",
            colorType: "",
            contrast: "",
            brightness: "",
            saturation: "",
            highlights: "",
            exposure: "",
            shadows: "",
            whites: "",
            blacks: "",
            luminance: "",
            hue: "",
        };
        this.insert = this.create.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    // --------------------------------------------------------------------------------------------------
    // componentDidMount() {
    //     this.auth()
    // }
    // -------------------------------------------AUTHORIZATION-------------------------------------------------------
    // auth() {
    //     const token = localStorage.getItem('token')
    //     console.log(token)
    //     fetch("http://localhost:3001/authA", {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json",
    //             "Authorization": 'Bearer ' + token
    //         },
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data)
    //             if (data.status !== 'ok') {
    //                 alert('Please login');
    //                 localStorage.removeItem('token');
    //                 window.location = '/login';
    //             }
    //             // only admin can edit product if they aren't then redirect to profile page
    //             if (data.admin[0].l_role !== 'A') {
    //                 alert('You cannot enter here!');
    //                 localStorage.removeItem('token');
    //                 window.location = '/login';
    //             }

    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });

    // }
    // -------------------------------------------CREATE NEW PRODUCT-------------------------------------------------------
    create(e) {
        const link = "http://localhost:8080/add-sciencePlan";
        console.log(link);
        fetch(link, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                creator: this.state.creator,
                submitter: this.state.submitter,
                fundingInUSD: this.state.fundingInUSD,
                objectives: this.state.objectives,
                starSystem: this.state.starSystem,
                startDate: this.state.startDate + " 00:00:00",
                endDate: this.state.endDate + " 00:00:00",
                telescopeLocation: this.state.telescopeLocation,
                fileType: this.state.fileType,
                fileQuality: this.state.fileQuality,
                colorType: this.state.colorType,
                contrast: this.state.contrast,
                brightness: this.state.brightness,
                saturation: this.state.saturation,
                highlights: this.state.highlights,
                exposure: this.state.exposure,
                shadows: this.state.shadows,
                whites: this.state.whites,
                blacks: this.state.blacks,
                luminance: this.state.luminance,
                hue: this.state.hue
            }),
        })
            .then((response) => response.text())
            .then((response) => {
                console.log(response);
                if (response.status === 'success') {
                    alert(response.message);
                    window.location = '/productAdmin';
                }
                else {
                    alert(response.message);
                }
            })

            .catch((err) => {
                console.log(err);
                alert(err);
            });
    }


    handleChange(e) {
        this.setState({ [e.target.id]: e.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div>
        <header>
          <h1>GEMINI-6</h1>
        </header>
        <main>
          <div className={styles.container}>
            <div className={styles.left}>
              <h1>Create Science Plan</h1>
              <form>
                <div className={styles.formgroup}>
                  <label htmlFor="creator">Creator:</label>&nbsp;&nbsp;<br />
                  <input type="text" id="creator" name="creator" placeholder="Name" value={this.state.creator} onChange={this.handleChange}/>
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="submitter">Submitter:</label>&nbsp;&nbsp;<br />
                  <input type="text" id="submitter" name="submitter" placeholder="Name" value={this.state.submitter} onChange={this.handleChange}/>
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="amount">Amount Funded And</label><label>Schedule:</label><br />
                  <input type="number" id="fundingInUSD" name="amount" placeholder="Amount" value={this.state.fundingInUSD} onChange={this.handleChange}/>&nbsp;&nbsp;
                  <input type="date" id="startDate" name="startDate" value={this.state.startDate} onChange={this.handleChange}/>&nbsp;
                  <input type="date" id="endDate" name="endDate" value={this.state.endDate} onChange={this.handleChange}/>
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="object">Objectives</label>&nbsp;&nbsp;<br />
                  <input type="text" id="objectives" name="objectives" placeholder="Objective" value={this.state.objectives} onChange={this.handleChange}/>
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="star-system">Star System:</label>&nbsp;&nbsp;<br />
                  <select id="starSystem" name="starSystem" value={this.state.starSystem} onChange={this.handleChange}>
                    <option value="Andromeda" id="starSystem">Andromeda</option>
                    <option value="Antlia" id="starSystem">Antlia</option>
                    <option value="Apus" id="starSystem">Apus</option>
                    <option value="Aquarius" id="starSystem">Aquarius</option>
                    <option value="Aquila" id="starSystem">Aquila</option>
                    <option value="Ara" id="starSystem">Ara</option>
                    <option value="Aries" id="starSystem">Aries</option>
                    <option value="Auriga" id="starSystem">Auriga</option>
                    <option value="Boötes" id="starSystem">Boötes</option>
                    <option value="Caelum" id="starSystem">Caelum</option>
                    <option value="Camelopardalis" id="starSystem">Camelopardalis</option>
                    <option value="Cancer" id="starSystem">Cancer</option>
                    <option value="CanesVenatici" id="starSystem">Canes Venatici</option>
                    <option value="CanisMajor" id="starSystem">Canis Major</option>
                    <option value="CanisMinor" id="starSystem">Canis Minor</option>
                    <option value="Capricornus" id="starSystem">Capricornus</option>
                    <option value="Carina" id="starSystem">Carina</option>
                    <option value="Cassiopeia" id="starSystem">Cassiopeia</option>
                    <option value="Centaurus" id="starSystem">Centaurus</option>
                    <option value="Cepheus" id="starSystem">Cepheus</option>
                    <option value="Cetus" id="starSystem">Cetus</option>
                    <option value="Chamaeleon" id="starSystem">Chamaeleon</option>
                    <option value="Circinus" id="starSystem">Circinus</option>
                    <option value="Columba" id="starSystem">Columba</option>
                    <option value="ComaBerenices" id="starSystem">Coma Berenices</option>
                    <option value="CoronaAustralis" id="starSystem">Corona Australis</option>
                    <option value="CoronaBorealis" id="starSystem">Corona Borealis</option>
                    <option value="Corvus" id="starSystem">Corvus</option>
                    <option value="Crater" id="starSystem">Crater</option>
                    <option value="Crux" id="starSystem">Crux</option>
                    <option value="Cygnus" id="starSystem">Cygnus</option>
                    <option value="Delphinus" id="starSystem">Delphinus</option>
                    <option value="Dorado" id="starSystem">Dorado</option>
                    <option value="Draco" id="starSystem">Draco</option>
                    <option value="Equuleus" id="starSystem">Equuleus</option>
                    <option value="Eridanus" id="starSystem">Eridanus</option>
                    <option value="Fornax" id="starSystem">Fornax</option>
                    <option value="Gemini" id="starSystem">Gemini</option>
                    <option value="Grus" id="starSystem">Grus</option>
                    <option value="Hercules" id="starSystem">Hercules</option>
                    <option value="Horologium" id="starSystem">Horologium</option>
                    <option value="Hydra" id="starSystem">Hydra</option>
                    <option value="Hydrus" id="starSystem">Hydrus</option>
                    <option value="Indus" id="starSystem">Indus</option>
                    <option value="Lacerta" id="starSystem">Lacerta</option>
                    <option value="Leo" id="starSystem">Leo</option>
                    <option value="LeoMinor" id="starSystem">Leo Minor</option>
                    <option value="Lepus" id="starSystem">Lepus</option>
                    <option value="Libra" id="starSystem">Libra</option>
                    <option value="Lupus" id="starSystem">Lupus</option>
                    <option value="Lynx" id="starSystem">Lynx</option>
                    <option value="Lyra" id="starSystem">Lyra</option>
                    <option value="Mensa" id="starSystem">Mensa</option>
                    <option value="Microscopium" id="starSystem">Microscopium</option>
                    <option value="Monoceros" id="starSystem">Monoceros</option>
                    <option value="Musca" id="starSystem">Musca</option>
                    <option value="Norma" id="starSystem">Norma</option>
                    <option value="Octans" id="starSystem">Octans</option>
                    <option value="Ophiuchus" id="starSystem">Ophiuchus</option>
                    <option value="Orion" id="starSystem">Orion</option>
                    <option value="Pavo" id="starSystem">Pavo</option>
                    <option value="Pegasus" id="starSystem">Pegasus</option>
                    <option value="Perseus" id="starSystem">Perseus</option>
                    <option value="Phoenix" id="starSystem">Phoenix</option>
                    <option value="Pictor" id="starSystem">Pictor</option>
                    <option value="Pisces" id="starSystem">Pisces</option>
                    <option value="PiscisAustrinus" id="starSystem">Piscis Austrinus</option>
                    <option value="Puppis" id="starSystem">Puppis</option>
                    <option value="Pyxis" id="starSystem">Pyxis</option>
                    <option value="Reticulum" id="starSystem">Reticulum</option>
                    <option value="Sagitta" id="starSystem">Sagitta</option>
                    <option value="Sagittarius" id="starSystem">Sagittarius</option>
                    <option value="Scorpius" id="starSystem">Scorpius</option>
                    <option value="Sculptor" id="starSystem">Sculptor</option>
                    <option value="Scutum" id="starSystem">Scutum</option>
                    <option value="Serpens" id="starSystem">Serpens</option>
                    <option value="Sextans" id="starSystem">Sextans</option>
                    <option value="Taurus" id="starSystem">Taurus</option>
                    <option value="Telescopium" id="starSystem">Telescopium</option>
                    <option value="Triangulum" id="starSystem">Triangulum</option>
                    <option value="TriangulumAustrale" id="starSystem">Triangulum Australe</option>
                    <option value="Tucana" id="starSystem">Tucana</option>
                    <option value="UrsaMajor" id="starSystem">Ursa Major</option>
                    <option value="UrsaMinor" id="starSystem">Ursa Minor</option>
                    <option value="Vela" id="starSystem">Vela</option>
                    <option value="Virgo" id="starSystem">Virgo</option>
                    <option value="Volans" id="starSystem">Volans</option>
                    <option value="Vulpecula" id="starSystem">Vulpecula</option>
                  </select>
                </div>
                <div className={styles.formgroup}>
                  <label htmlFor="telescope-location">Telescope Location:</label>&nbsp;&nbsp;<br />
                  <input type="text" id="telescopeLocation" name="telescopeLocation" placeholder="Telescope Location"  value={this.state.telescopeLocation} onChange={this.handleChange}/>
                </div>
              </form></div>
              <br />
            <div className={styles.right}>
              <h2>Data Processing Requirement</h2>
              <br />
              <div className={styles.formgroup}>
                <label htmlFor="file-type">File Type:</label><br />
                <select id="fileType" name="fileType"  value={this.state.fileType} onChange={this.handleChange}>
                  <option value="png" id="fileType" selected>PNG</option>
                  <option value="jpef" id="fileType">JPEG</option>
                  <option value="raw" id="fileType">RAW</option>
                </select>
              </div>
              <div className={styles.formgroup}>
                <label htmlFor="file-type">File Quality:</label>&nbsp;&nbsp;<br />
                <select id="fileQuality" name="fileQuality"  value={this.state.fileQuality} onChange={this.handleChange}>
                  <option value="png" id="fileQuality" selected>Low</option>
                  <option value="jpef" id="fileQuality">Fine</option>
                </select>
              </div>
              <h2>Image Processing</h2>
              <div className={styles.formgroup}>
                <label htmlFor="mode">Mode:</label>&nbsp;&nbsp;<br />
                <select id="colorType" name="colorType"  value={this.state.colorType} onChange={this.handleChange}>
                  <option value="bw" id="colorType" selected>B&amp;W</option>
                  <option value="color" id="colorType">Color</option>
                </select>
              </div>
              <div className={styles.formgroup}>
                <label htmlFor="contrast">Contrast</label>&nbsp;&nbsp;<br />
                <input type="text" id="contrast"name="contrst" min={0} max={50}  value={this.state.contrast} onChange={this.handleChange}/>
                <output id="rangevalue">0-50</output>
              </div>
              <div className={styles.formgroup}>
                <label htmlFor="color">Brightness:</label>&nbsp;&nbsp;<br />
                <input type="text" id="brightness" name="bw" min={0} max={50}  value={this.state.brightness} onChange={this.handleChange}/>
                <output id="rangevalue">0-50</output>
                <div className={styles.formgroup}>
                  <label htmlFor="Saturation">Saturation:</label>&nbsp;&nbsp;<br />
                  <input type="text" id="saturation" min={0} max={50}  value={this.state.saturation} onChange={this.handleChange}/>
                  <output id="rangevalue">0-50</output>
                </div>
              </div>
              <div className={styles.formgroup}>
                <label htmlFor="contrast">Highlights:</label>&nbsp;&nbsp;<br />
                <input type="text" id="highlights" min={0} max={50}  value={this.state.highlights} onChange={this.handleChange}/>
                <output id="rangevalue">0-50</output>
              </div>
              <div className={styles.formgroup}>
                <label htmlFor="brightness">Exposure:</label>&nbsp;&nbsp;<br />
                <input type="text" id="exposure" min={0} max={50}  value={this.state.exposure} onChange={this.handleChange}/>
                <output id="rangevalue">0-50</output>
              </div>
              <div className={styles.formgroup}>
                <label htmlFor="brightness">Shadows:</label>&nbsp;&nbsp;<br />
                <input type="text" id="shadows" min={0} max={50}  value={this.state.shadows} onChange={this.handleChange}/>
                <output id="rangevalue">0-50</output>
              </div>
              <div className={styles.formgroup}>
                <label htmlFor="brightness">Whites:</label>&nbsp;&nbsp;<br />
                <input type="text" id="whites" min={0} max={50}  value={this.state.white} onChange={this.handleChange}/>
                <output id="rangevalue">0-50</output>
              </div>
              <div className={styles.formgroup}>
                <label htmlFor="brightness">Blacks:</label>&nbsp;&nbsp;<br />
                <input type="text" id="blacks" min={0} max={50}  value={this.state.blacks} onChange={this.handleChange}/>
                <output id="rangevalue">0-50</output>
              </div>
              <div className={styles.formgroup}>
                <label htmlFor="brightness">Luminance:</label>&nbsp;&nbsp;<br />
                <input type="text" id="luminance" min={0} max={50} />
                <output id="rangevalue">0-50</output>
              </div>
              <div className={styles.formgroup}>
                <label htmlFor="brightness">Hue:</label>&nbsp;&nbsp;<br />
                <input type="text" id="hue" min={0} max={50}  value={this.state.hue} onChange={this.handleChange}/>
                <output id="rangevalue">0-50</output>
              </div>
              <button type="submit" onClick={(e) => this.create(e)}>Submit</button>
            </div>
          </div>
        </main>
      </div>
        );
    }
}


export default CreateSciPlan;