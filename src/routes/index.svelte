<script lang="ts">
  import Fa from 'svelte-fa'
  import { faGithub } from '@fortawesome/free-brands-svg-icons'

  import Blanchor from '$lib/Blanchor.svelte';
  import { faFilePdf } from '@fortawesome/free-solid-svg-icons'
</script>

<main>
	<header>
    <div>
      <h1>Integrated Sensors Platform</h1>
      <h3>Streamlining Quantitative Physiological Data Collection and Analysis</h3>
      <div>Harry X. Li, Vincent Mancuso, Sarah McGuire</div>
      <br/>
      <div style="font-size:2em">
        <Blanchor href="https://github.com/harryli0088/integrated-sensors-platform">
          <Fa class="icon-button" icon={faGithub} style="color:white;"/>
        </Blanchor>
      </div>
      <br/>
      <div><i>Presented at <Blanchor href="https://2022.hci.international/">HCII 2022</Blanchor></i></div>
    </div>
  </header>

  <section>
    <Blanchor href="Integrated_Sensors_Platform.pdf">
      <button style="background-color:#FF5733;outline: none;border: none;color:white">
        Full Paper <Fa icon={faFilePdf}/>
      </button>
    </Blanchor>

    <Blanchor href="Integrated_Sensors_Platform_Presentation.pdf">
      <button style="background-color:#F39C12;outline: none;border: none;color:white">
        Presentation <Fa icon={faFilePdf}/>
      </button>
    </Blanchor>

    <h2>Presentation Video</h2>
    <video width="100%" height="auto" controls style="background-color:gray">
      <source src="Integarted Sensors Platform HCII 2022 Video Presentation.mp4" type="video/mp4">
      Your browser does not support the video tag :( but you can view it <Blanchor href="Integarted Sensors Platform HCII 2022 Video Presentation.mp4">here</Blanchor>
    </video>

    <br/>

    <p><b>Abstract.</b> Human performance measurement for computer-based tasks
      is a critical need for assessing new capabilities and making inferences
      about their usability, utility and efficacy. Currently, many performancebased assessments
      rely on outcome-based measures and subjective evaluations. However, a quantitative method
      is needed to provide more finegrained insight into performance.
      While there are some commercial solutions that integrate human sensors, in our exploration, these solutions
      have numerous limitations. We decided to build our own web application platform, the Integrated Sensors Platform (ISP),
      to collect, integrate, and fuse disparate human-based sensors, allowing users to link
      physio-behavioral outcomes to overall performance. Currently, we have
      integrated three sensors, two commercial and one custom, which together
      can help calculate various user metrics. While our focus has been using
      ISP to assess visualizations for cybersecurity, we hypothesize that it can
      have impact for both researchers and practitioners in the HCII community.</p>

    <br/><br/>
  </section>

  <section>
    <h2>Distribution Statement</h2>

    <p>All the documents including the paper, presentation, videos, and descriptive text have this distribution statement:</p>

    <p><b>DISTRIBUTION STATEMENT A. Approved for public release. Distribution is unlimited.</b></p>
    <p>
      This material is based upon work supported by the Combatant Commands under Air Force Contract
      No. FA8702-15-D-0001. Any opinions, findings, conclusions or recommendations expressed in this 
      material are those of the author(s) and do not necessarily reflect the views of the Combatant Commands.

      © 2022 Massachusetts Institute of Technology. Delivered to the U.S. Government with Unlimited 
      Rights, as defined in DFARS Part 252.227-7013 or 7014 (Feb 2014). Notwithstanding any copyright
      notice, U.S. Government rights in this work are defined by DFARS 252.227-7013 or DFARS
      252.227-7014 as detailed above. Use of this work other than as specifically authorized by the U.S.
      Government may violate any copyrights that exist in this work.
    </p>
  </section>
</main>

<style>
	header {
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
		background-color: #17202A;
		color: white;
    text-align: center;
    height: 70vh;
	}
  @media only screen and (min-width: 600px) {
		header {
			height: 50vh;
		}
	}

  video {
    border: 1px solid #ddd;
  }
</style>