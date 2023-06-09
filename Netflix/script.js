let gfa = 1;

document.getElementById('swipdasleft').onclick = () => {
    if (gfa == 0) {
        document.getElementById('body').style = "background-image: url('AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXd70HawdJeuD.jpg');background-repeat: no-repeat;background-size: contain;";
        gfa++;
    }

    else if (gfa == 1) {
        document.getElementById('body').style = "background-image: url('AAAABYZ_9Wml838MQOf9pWOOVLn5TMejp-qMZ6eYoPf-co0gIJzlio8SGd6rgcPrFJPMGMutYsWMoXPm30p-DCNSLc2Ug_I5TDscFq2E.jpg');background-repeat: no-repeat;background-size: contain;";
        gfa++;
    }

    else if (gfa == 2) {
        document.getElementById('body').style = "background-image: url('Untitled ;.png');background-repeat: no-repeat;background-size: contain;";
        gfa++;
    }
    else if (gfa == 3) {
        document.getElementById('body').style = "background-image: url('Untitled 2.png');background-repeat: no-repeat;background-size: contain;";

    }

}

document.getElementById('swipdasright').onclick = () => {
    if (gfa == 3) {
        document.getElementById('body').style = "background-image: url('Untitled 2.pngs');background-repeat: no-repeat;background-size: contain;";
        gfa--;
    }

    else if (gfa == 2) {
        document.getElementById('body').style = "background-image: url('Untitled ;.png');background-repeat: no-repeat;background-size: contain;";
        gfa--;
    }

    else if (gfa == 1) {
        document.getElementById('body').style = "background-image: url('AAAABYZ_9Wml838MQOf9pWOOVLn5TMejp-qMZ6eYoPf-co0gIJzlio8SGd6rgcPrFJPMGMutYsWMoXPm30p-DCNSLc2Ug_I5TDscFq2E.jpg');background-repeat: no-repeat;background-size: contain;";
        gfa--;
    }

    else if (gfa == 0) {
        document.getElementById('body').style = "background-image: url('AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXd70HawdJeuD.jpg');background-repeat: no-repeat;background-size: contain;";
        gfa = 3;
    }

}


// document.getElementsByTagName('body')[0].style="background-image: url('AAAABer7SeWc6FvkBqWtk61GwL7rshAEVCOARQZVTEJGnLXykYBlO4nbbr6gs7M650BjULuaN6hucXKr5xY2iqPAajrxXd70HawdJeuD.jpg');";