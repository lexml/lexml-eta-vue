const i=(e,o)=>e.findIndex(r=>r.idIdentificacao===o.idIdentificacao)<4,c=e=>{const o=[...e];return o.sort((r,n)=>{const a=n.ano-r.ano;return a||n.numero.localeCompare(r.numero)}),o};export{i,c as o};
