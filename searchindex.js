Search.setIndex({"docnames": ["examples", "examples/qualitative_dispersion", "examples/ring_resonator", "installation", "intro", "maxwell", "maxwell/diffops", "maxwell/hcurl", "maxwell/introduction", "maxwell/mass_lumping", "maxwell/time_stepping"], "filenames": ["examples.md", "examples/qualitative_dispersion.ipynb", "examples/ring_resonator.ipynb", "installation.md", "intro.md", "maxwell.md", "maxwell/diffops.md", "maxwell/hcurl.md", "maxwell/introduction.md", "maxwell/mass_lumping.md", "maxwell/time_stepping.md"], "titles": ["<span class=\"section-number\">3. </span>Examples", "<span class=\"section-number\">3.1. </span>A plane wave on a square", "<span class=\"section-number\">3.2. </span>Ring resonator", "<span class=\"section-number\">1. </span>Installation", "The Dual Cell Method in NGSolve", "<span class=\"section-number\">2. </span>The dual cell method for the time-domain Maxwell system", "<span class=\"section-number\">2.5. </span>The discrete differential operators", "<span class=\"section-number\">2.3. </span>Discrete spaces on dual cells", "<span class=\"section-number\">2.2. </span>Introduction", "<span class=\"section-number\">2.4. </span>Mass lumping", "<span class=\"section-number\">2.6. </span>Time stepping"], "terms": {"A": [0, 4, 7, 8], "plane": [0, 4], "wave": [0, 2, 4, 6, 8], "squar": [0, 4, 7, 9], "ring": [0, 4], "reson": [0, 4], "we": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "solv": [1, 2, 6, 8], "two": [1, 2, 4, 7, 8], "dimension": [1, 7, 8], "equat": [1, 2, 4, 5, 10], "find": [1, 5, 6, 7, 8], "h": [1, 2, 5, 6, 7, 8], "0": [1, 2, 5, 6, 7, 8, 9, 10], "t": [1, 2, 5, 6, 8], "1": [1, 2, 6, 7, 8, 9, 10], "omega": [1, 2, 5, 7, 8], "vector": [1, 2, 6, 7], "field": [1, 2, 4, 5, 8], "e": [1, 2, 3, 4, 5, 6, 7, 8], "mathrm": [1, 2, 5, 6, 8], "div": [1, 2, 6], "ar": [1, 2, 4, 5, 6, 7, 8, 9, 10], "begin": [1, 2, 5, 10], "align": [1, 2, 5, 10], "partial_t": [1, 2, 5, 7, 8, 10], "x": [1, 5, 6, 7], "nabla": [1, 2], "f": [1, 2, 6, 7], "exp": [1, 2, 6], "400": [1, 2], "y": [1, 2, 6], "2": [1, 2, 4, 6, 7, 8, 9, 10], "partial": [1, 6, 7, 8], "end": [1, 2, 5, 7, 10], "from": [1, 2, 3, 6, 7, 9], "ngsolv": [1, 2, 6, 7, 9], "import": [1, 2, 6, 7, 9], "dualcellspac": [1, 2, 6, 7, 9], "dc": [1, 2, 6, 7, 9], "time": [1, 4, 6, 7, 8, 9], "webgui": [1, 2, 6, 7], "draw": [1, 2, 6, 7], "after": 1, "necessari": [1, 8], "defin": [1, 2, 6, 7, 8, 9], "some": [1, 5, 6], "paramet": [1, 2, 8], "mesh": [1, 2, 4, 6, 8, 9], "maxh": [1, 2, 6, 7, 9], "03": [1, 2, 6], "tend": [1, 2], "order": [1, 2, 3, 4, 6, 7, 9], "h0": 1, "cf": [1, 2, 6], "20": [1, 2, 4], "e0": 1, "unit_squar": [1, 6, 7, 9], "generatemesh": [1, 2, 6, 7, 9], "space": [1, 6, 9], "fesh": [1, 6], "h1dualcel": [1, 2, 6], "fese": [1, 6], "hdivprimalcel": [1, 2, 6], "To": [1, 2, 5, 7, 9], "mass": [1, 2, 4, 6, 8, 10], "bilinear": [1, 7], "form": [1, 8, 10], "need": [1, 2, 5, 6, 9], "special": 1, "integr": [1, 2, 6, 7, 8, 9], "rule": [1, 2, 6, 9], "de": [1, 6], "tnt": [1, 2, 6, 9], "dh": 1, "dxh": 1, "dx": [1, 2, 6, 9], "intrul": [1, 2, 6, 9], "getintegrationrul": [1, 2, 6, 9], "dsw": [1, 2, 6], "element_boundari": [1, 2, 6], "true": [1, 2, 6, 7], "6": [1, 2, 7], "dxw": [1, 2, 6], "id": [1, 2], "massh": 1, "massinv": 1, "invers": [1, 2, 6, 8, 9], "massinvh": 1, "normal": [1, 2, 6], "specialcf": [1, 2, 6], "grad": [1, 6], "bilinearform": [1, 2, 6, 9], "geom_fre": [1, 2, 6], "assembl": [1, 2, 6, 9], "mat": [1, 2, 6, 9], "lffh": 1, "linearform": [1, 2, 6], "The": [1, 2, 3, 8, 9], "maxim": 1, "admiss": [1, 8], "step": [1, 7, 8, 9], "mai": [1, 2, 3, 5, 7, 8, 9], "estim": 1, "us": [1, 2, 6, 7, 8, 9, 10], "simpl": [1, 3, 7], "power": 1, "iter": 1, "def": [1, 2], "estimate_tau": 1, "maxstep": 1, "1000": 1, "tol": 1, "1e": [1, 9], "4": [1, 2, 6, 7, 10], "vec": [1, 2, 6, 7], "createcolvector": 1, "setrandom": [1, 6, 9], "tmp": [1, 2, 9], "createvector": [1, 2, 9], "lam": 1, "i": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], "rang": [1, 6, 7, 9], "print": [1, 2, 6, 7, 9], "r": [1, 2, 5, 6, 7, 8], "data": [1, 2, 6, 9], "lamnew": 1, "innerproduct": 1, "tau": [1, 2, 8, 10], "sqrt": [1, 2], "re": 1, "norm": 1, "diff": 1, "return": [1, 2], "did": 1, "converg": 1, "last": 1, "timestep": [1, 2, 8, 10], "format": [1, 2, 6, 7, 9], "9": [1, 2], "438193e": 1, "It": [1, 2, 4, 8, 10], "remain": [1, 2, 8], "set": [1, 2, 7], "initi": 1, "condit": [1, 5], "draweveri": [1, 2], "30": 2, "gfe": [1, 6], "gridfunct": [1, 2, 6, 7], "gfh": [1, 6], "gfh_histori": 1, "multidim": [1, 2, 7], "scene": [1, 2], "intpoint": [1, 2, 7], "getwebguipoint": [1, 2, 6, 7], "autoscal": [1, 2], "fals": [1, 2], "min": [1, 2, 7], "max": [1, 2, 7], "start": [1, 2, 7, 8, 9], "loop": 1, "now": [1, 2, 6, 9], "nowstart": 1, "energi": [1, 8], "tmph": 1, "tmpe": 1, "subtim": 1, "taskmanag": [1, 2, 6, 9], "while": [1, 2, 8], "timepass": 1, "before_energy_tim": 1, "addmultidimcompon": [1, 2], "redraw": [1, 2], "append": [1, 2], "current": 1, "dof": [1, 2, 6, 7], "": [1, 2, 6, 7, 8, 9], "ndof": [1, 2, 6, 7, 9], "comptim": 1, "n": [1, 2, 5, 6, 7, 9], "per": [1, 7], "second": [1, 2], "1545": 1, "1491700646156": 1, "162256": 1, "653121e": [], "07": 2, "anim": [1, 2, 7], "observ": [1, 9], "preserv": 1, "modifi": [1, 3], "discret": [1, 2, 8, 10], "matplotlib": [1, 2, 3, 9], "pyplot": [1, 2, 9], "pl": [1, 2, 9], "plot": [1, 2, 9], "ylim": 1, "simul": [2, 4], "propag": 2, "an": [2, 3, 4, 7], "electromagnet": [2, 4], "tm": 2, "through": 2, "devic": 2, "dual": [2, 9], "cell": [1, 2, 6, 9], "method": [1, 2, 9], "add": 2, "desir": 2, "sketch": 2, "below": 2, "where": [2, 4, 5, 7, 8, 9, 10], "horizont": 2, "waveguid": 2, "suppos": 2, "unbound": 2, "govern": 2, "scalar": [2, 8], "p": [2, 6, 7, 8, 9, 10], "u": [2, 6, 9], "l": [2, 4, 7, 8], "int_": [2, 5, 6], "cdot": [2, 6, 7, 8], "v": [2, 6, 8, 9, 10], "pq": 2, "q": [2, 6, 7, 8], "fq": 2, "all": [2, 5, 6, 7], "test": 2, "function": [1, 2, 4, 6, 8, 9], "domain": [2, 4, 6, 7, 8], "surround": 2, "absorb": 2, "layer": 2, "damp": 2, "system": [2, 4, 8, 10], "alpha": 2, "omega_": 2, "tb": 2, "cup": 2, "lr": 2, "top": [2, 6, 7, 10], "mathbf": [2, 5, 6, 7, 8, 10], "hat": [2, 7, 8], "left": [2, 7, 8, 10], "nn": 2, "right": [2, 6, 7, 8, 10], "int": [2, 7], "fv": 2, "omega_c": 2, "direct": [2, 7], "case": 2, "given": [2, 7, 8, 10], "parallel": 2, "wire": 2, "shape": [2, 9], "one": [2, 5, 6, 7, 8, 9], "between": [2, 8, 9], "splinegeometri": 2, "netgen": 2, "geom2d": 2, "gm": 2, "numpi": [2, 3, 9], "np": [2, 9], "geo": 2, "xneg": 2, "43": 2, "xpo": 2, "yneg": 2, "48": [2, 7], "ypo": 2, "wslab": 2, "04": 2, "cringx": 2, "cringi": 2, "rring": 2, "gap": 2, "005": 2, "pntx": 2, "pnty": 2, "pt": 2, "yi": 2, "xi": [2, 7], "addpoint": 2, "inner": [2, 7, 8], "rect": 2, "line": [2, 8], "leftdomain": 2, "rightdomain": 2, "3": [2, 5, 6, 7, 8, 9], "5": [2, 6, 7, 9], "bc": 2, "normal_wg_rightbottom": 2, "normal_wg_leftbottom": 2, "7": [2, 7], "normal_wg_righttop": 2, "8": 2, "normal_wg_lefttop": 2, "11": 2, "10": [2, 4, 9], "addcircl": 2, "c": [2, 5, 7, 8], "setmateri": 2, "air": 2, "eps_nin": 2, "thi": [2, 4, 5, 6, 7, 8, 9, 10], "result": [2, 6, 9], "follow": [2, 6, 7, 8], "triangul": 2, "mesh_inn": 2, "curv": 2, "howev": [2, 8], "also": [2, 3, 5, 8], "want": [2, 3], "perfectli": 2, "match": 2, "pmlwidth": 2, "05": 2, "createpml": 2, "ha": [2, 3, 7, 8], "ad": 2, "our": [2, 6, 7, 8, 9], "interior": 2, "bd": 2, "getboundari": 2, "default": 2, "getmateri": 2, "pml_default": 2, "pml_corner": 2, "pml_default_duplicate_1": 2, "pml_normal_wg_rightbottom": 2, "pml_default_duplicate_2": 2, "pml_normal_wg_righttop": 2, "pml_default_duplicate_3": 2, "pml_default_duplicate_4": 2, "pml_default_duplicate_5": 2, "pml_normal_wg_lefttop": 2, "pml_default_duplicate_6": 2, "pml_normal_wg_leftbottom": 2, "pml_default_duplicate_7": 2, "boundari": [1, 2, 4, 5, 6, 7, 8], "wavelength": 2, "542": 2, "fcen": 2, "tpeak": 2, "sourcei": 2, "coefficientfunct": 2, "sin": 2, "pi": 2, "fes_facet": 2, "facetfespac": 2, "gfsourc": 2, "definedon": 2, "t_envelop": 2, "ab": 2, "els": 2, "delta": 2, "001": 2, "arang": 2, "xlabel": 2, "figur": [2, 9], "materi": 2, "background": 2, "medium": [2, 5], "eps_r": 2, "startswith": 2, "pml_normal_wg": 2, "ep": 2, "scale": [2, 8], "non": 2, "corner": 2, "nvec": 2, "cfn": 2, "next": [2, 7], "up": [2, 6, 7], "fes_u": 2, "fes_p": 2, "dirichlet": 2, "outer": 2, "vectori": [2, 7, 8, 9], "fe": [2, 9], "total": 2, "030700e": [], "887000e": [], "383540e": [], "which": [2, 6, 7, 8, 9], "respect": [2, 4, 7, 8, 9], "These": 2, "can": [2, 3, 7, 9], "obtain": [2, 6, 7, 8, 9], "via": [2, 3, 7, 9], "over": [1, 2, 6], "volum": 2, "element": [1, 2, 3, 4, 6, 7, 8, 9], "ir": [2, 6, 9], "et": [2, 9], "segm": [2, 9], "fem": 2, "integrationrul": [2, 9], "object": 2, "0x70232cb071f0": [], "trig": [2, 9], "0x70232cb06930": [], "tet": [2, 9], "0x70232cb07630": [], "diverg": 2, "contain": [2, 7], "jump": 2, "term": [1, 2, 6, 8], "due": [2, 6, 8], "fact": [2, 8, 9], "v_h": 2, "discontinu": [2, 4, 8, 9], "b": [2, 4, 5, 6, 10], "matric": [2, 4, 6, 9, 10], "block": [1, 2, 4, 9], "diagon": [1, 2, 4, 9], "lump": [2, 4, 6], "thei": [2, 9], "implement": [2, 4, 6, 7, 8, 9], "effici": 2, "fespac": [2, 9], "invmassp": 2, "freedof": 2, "invmassu": 2, "dim": 2, "pml1d": 2, "pml_normal": 2, "dampp1": 2, "dampp2": 2, "dampu1": 2, "outerproduct": 2, "dampu2": 2, "big": 2, "oper": [2, 8, 10], "embed": 2, "small": 2, "emb_p": 2, "emb_phat": 2, "emb_u": 2, "emb_uhat": 2, "b_big": 2, "dampu_big": 2, "dampp_big": 2, "invmassp_big": 2, "invmassu_big": 2, "lastli": [2, 6], "q_big": [], "testfunct": 6, "lsrc": 2, "gfu": [2, 6, 7], "gfp_histori": 2, "compon": [2, 8], "4e": [], "5e": [], "25": [7, 9], "startnow": 2, "200": [], "mdofss": [], "087120000001544": [], "113300e": [], "ssss": [], "keyboardinterrupt": [], "traceback": [], "most": [3, 8], "recent": [3, 8], "call": 7, "In": [5, 7, 9], "37": [], "23": [], "21": [], "22": 9, "24": [], "finish": [], "packag": [3, 7, 9], "high": [3, 4, 9], "finit": [3, 4, 7, 8, 9], "librari": [3, 4], "thu": [3, 4, 6, 7, 8, 9], "main": [3, 8, 9], "premis": 3, "suffici": 3, "version": 3, "beforehand": 3, "wai": [3, 6, 7], "python": 3, "m": [3, 4, 9], "scipi": 3, "jupyt": 3, "ipyparallel": 3, "scikit": 3, "build": 3, "upgrad": 3, "webgui_jupyter_widget": 3, "For": [3, 4, 7, 8, 9, 10], "troubleshoot": 3, "refer": [3, 6, 7, 9], "variou": 3, "tutori": 3, "ngs24": 3, "document": 3, "If": 3, "you": 3, "do": 3, "updat": 3, "your": 3, "might": 3, "consid": 3, "virtual": 3, "environ": 3, "As": [3, 6, 9], "avail": 3, "core": 3, "again": [3, 7, 8], "have": [3, 7, 8, 9], "binari": 3, "git": 3, "http": [3, 4], "github": 3, "com": 3, "dcm": [3, 4], "built": 3, "sourc": [1, 3, 5], "dev": 3, "wa": [3, 9], "g": [3, 4, 8], "pre": 3, "pybind11_stubgen": 3, "isol": 3, "modul": 3, "clone": 3, "them": [3, 7], "done": [3, 6, 7, 8], "either": 3, "cmake": 3, "cd": 3, "mkdir": 3, "make": [3, 8], "j4": 3, "whether": [3, 9], "demo": 3, "dc_intrul": 3, "test_spac": 3, "wess": 4, "j": [4, 7, 8, 10], "sch\u00f6berl": 4, "tu": 4, "wien": 4, "institut": 4, "analysi": 4, "scientif": 4, "comput": [2, 4, 9], "base": 4, "joint": 4, "work": 4, "kapidani": 4, "codecasa": 4, "book": 4, "design": 4, "provid": [4, 9], "introduct": 4, "exampl": 4, "galerkin": 4, "acoustiv": 4, "mix": 4, "formul": [4, 5, 7, 8], "disconitinu": 4, "variant": 4, "approxim": [4, 8, 9], "conform": [4, 7], "each": [4, 6, 7, 8, 9], "other": [4, 8], "ansatz": 4, "featur": [4, 8], "differ": [4, 7, 8], "full": [4, 6], "mathemat": 4, "kcschoberl21": 4, "wkcs23": [], "instal": 4, "maxwel": 4, "bernard": 4, "lorenzo": 4, "joachim": 4, "sch": 4, "\u00f6": 4, "berl": 4, "arbitrari": 4, "depend": [4, 7, 8, 9], "d": [4, 5, 6], "axwel": 4, "phy": 4, "433": 4, "paper": 4, "No": 4, "110184": 4, "2021": 4, "doi": 4, "1016": 4, "jcp": 4, "marku": 4, "polynomi": [4, 7, 9], "degre": [4, 8], "acoust": 4, "2023": [], "arxiv": [], "2312": [], "14716": [], "section": [5, 6, 7, 8, 9], "describ": 5, "detail": 5, "how": 5, "appli": [5, 8, 9], "neglect": 5, "possibl": [5, 6, 8, 9], "here": [5, 9], "curl": [5, 6], "text": [5, 8], "suitabl": [1, 5], "subset": 5, "mathbb": [5, 6, 7, 8], "close": 5, "constitut": 5, "relat": 5, "color": 5, "emph1": 5, "varepsilon": [5, 7, 8], "emph2": 5, "mu": [5, 7, 8], "permitt": 5, "permeabl": 5, "question": [5, 9], "weak": [5, 6, 7, 8], "eh": 5, "assum": 5, "homogen": 5, "abov": [5, 6, 7], "rewritten": 5, "377423e": [], "08": 1, "270705e": [], "187766e": [], "version_info": [], "modulenotfounderror": [], "input": [], "name": [], "9933350511855035": [], "1540": [], "06247129244141534": [], "381633e": [], "088": [], "160984e": [], "392659e": [], "35": [], "409019e": [], "322534e": [], "371604e": [], "0x7abf0dc794b0": [], "0x7abf0dc793f0": [], "0x7abf0dc78df0": [], "036663e": [], "3e": 2, "300": [], "dofss": 2, "when": [8, 9], "type": [], "problem": [6, 7, 9], "approach": [7, 8, 9], "typic": 8, "choic": [8, 9], "implicit": 8, "explicit": 9, "former": 8, "matrix": [6, 7, 8, 9, 10], "compos": [7, 8], "differenti": [1, 8, 10], "although": 8, "scheme": [8, 10], "uncondition": 8, "stabl": [8, 10], "independ": 8, "factor": [8, 9], "larg": 8, "doe": 8, "well": [8, 10], "veri": [8, 9], "number": [7, 8], "freedom": 8, "hand": [6, 8], "mere": [6, 8], "There": 8, "exist": [7, 8], "sever": 8, "conveni": 8, "downsid": 8, "stabil": 8, "qualiti": 8, "finer": 8, "largest": 8, "guarante": 8, "popular": 8, "afdsj": [], "adf": [], "dg": 8, "appelogr20": [], "daniel": [], "appel": [], "fortino": [], "garcia": [], "olof": [], "runborg": [], "waveholtz": [], "solut": [], "helmholtz": 8, "siam": [], "journal": 4, "42": [], "a1950": [], "a1983": [], "2020": 8, "1137": [], "19m1299062": [], "apart": [8, 9], "obviou": [8, 9], "better": 8, "applic": [6, 8, 9], "solver": 8, "interest": 8, "frequenc": 8, "scatter": [], "precondition": 8, "stolk": [], "eigenvalu": [8, 9], "lite": 8, "pinvit": 8, "lobpcg": 8, "earli": 8, "2000": 8, "knyazev": [], "filter": 8, "2e5": 8, "hit": 8, "googl": 8, "scholar": 8, "2e4": 8, "sinc": [7, 8, 9], "2022": 8, "low": 8, "onli": [7, 8], "hexahedr": [7, 8], "grid": [7, 8], "5e4": 8, "6e3": 8, "numer": [8, 9], "flux": 8, "penalti": 8, "both": 8, "been": 8, "around": 8, "late": 8, "1960": 8, "1970": 8, "still": 8, "wide": 8, "engin": 8, "sto21": [], "christiaan": [], "a3469": [], "a3502": [], "20m1359997": [], "kny01": [], "andrew": [], "toward": [], "optim": [1, 9], "precondit": [], "eigensolv": [], "local": [7, 8], "conjug": [], "gradient": [], "517": [], "541": [], "2001": [], "s1064827500366124": [], "nw24": [], "lothar": [], "nannen": [], "krylov": [], "2024": 4, "2402": [], "08515": [], "idea": [7, 9], "stoke": 8, "theorem": 8, "my": [], "caption": [], "visual": [7, 8], "lead": 8, "quantiti": 8, "interlac": 8, "pointwis": 8, "mimmick": 8, "l_": [7, 8], "k": [7, 8], "point": [1, 6, 7, 8, 9], "valu": 8, "x_i": 8, "y_j": 8, "z_k": 8, "tangenti": [7, 8], "stagger": 8, "h_": 8, "tfrac": [6, 8], "approx": 8, "e_": 8, "satisfi": 8, "leap": [8, 10], "frog": [8, 10], "size": 8, "_": [7, 8], "frac": [6, 8, 10], "quad": [7, 8, 10], "carri": 8, "goal": 8, "gener": 8, "tetrahedr": [7, 8], "157738e": [], "basi": [1, 6, 8, 9], "focuss": 8, "go": 8, "dimens": [8, 9], "primal": [1, 7, 8, 9], "interpret": 8, "orang": 8, "circl": 8, "piecewis": 8, "constant": 8, "dark": 8, "grei": 8, "consist": [7, 8], "four": [7, 8], "proce": 8, "unknown": 8, "neighbour": [7, 8], "continu": [7, 8], "tild": [6, 8], "c_j": 8, "bigcup_": [7, 8], "c_": 8, "mathcal": [6, 8], "_j": 8, "w_": 8, "setr": [], "foral": [7, 8], "cont": 8, "v_": [8, 10], "global": [6, 7, 8], "w": 8, "zero": [7, 8, 9], "outsid": [7, 8], "origin": 8, "pose": 8, "sum": [], "rot": 8, "sum_": [6, 7, 8], "semi": [8, 10], "ultra": 8, "variat": 8, "remark": 8, "aris": 8, "across": 8, "part": 8, "help": 8, "skew": 8, "symmetri": 8, "immedi": 8, "conserv": 8, "simplex": 8, "motiv": 8, "construct": 9, "symbol": 1, "correspond": [1, 9], "nodal": [1, 7, 9], "higher": 1, "sparsiti": [1, 9], "pattern": [1, 9], "328608e": 1, "596200e": 2, "352700e": 2, "824640e": 2, "0x7efeaab2eef0": 2, "0x7efeaab2f5f0": 2, "0x7efeaab2c9f0": 2, "879820000000851": 2, "030279e": 2, "sss": 2, "averag": 2, "1546": [], "424357e": [], "home": [], "mwess": [], "lib": [], "python3": [], "site": [], "project": 6, "__init__": [], "py": 9, "63": [], "userwarn": [], "unabl": [], "axes3d": [], "multipl": [], "being": [], "pip": [], "3d": [], "warn": [], "0x737388a1c9b0": [], "0x737388a1c270": [], "0x73738c7f48b0": [], "11327": [], "613625e": [], "309617e": [], "0x7c895f45ba70": [], "0x7c895d73d2b0": [], "0x7c895f343330": [], "552361e": [], "50": 1, "342434e": [], "498972e": [], "265443e": [], "0x7f00a4f15030": [], "0x7f00a4fa5530": [], "0x7f00a4fa5d30": [], "735248e": [], "274404e": [], "0x71581d5d7330": [], "0x71581d5d4330": [], "0x71581d5d5df0": [], "586595e": [], "408633e": [], "0x7aa7f4fbe670": [], "0x7aa7f4fbe0b0": [], "0x7aa7f4fbff70": [], "drawtim": 2, "drawnow": 2, "computetim": 2, "45": 7, "34500765800476": [], "553796e": [], "wkcs24": 4, "physic": [4, 6, 7], "page": 4, "113196": 4, "org": 4, "decomposit": 7, "subdomain": 7, "bar": 7, "usual": [7, 9], "triangl": 7, "tetrahedra": 7, "therebi": 7, "barycent": 7, "connect": 7, "midpoint": 7, "edg": 7, "creat": 7, "quadrilater": 7, "share": 7, "vertex": 7, "triangular": 7, "split": 7, "becom": 7, "center": 7, "red": 7, "blue": 7, "uniqu": 7, "varphi_c": 7, "node": [7, 9], "x_0": [7, 9], "ldot": [7, 9], "unit": [7, 9], "interv": [7, 9], "tensor": [7, 9], "x_": 7, "xj": 7, "_p": [6, 7], "fulfil": [7, 10], "delta_": 7, "remap": 7, "onto": 7, "identifi": 7, "same": [6, 7, 9], "support": 7, "first": 7, "command": 7, "h1": [6, 7], "h1primalcel": [7, 9], "ne": 7, "take": [6, 7], "look": 7, "deform": [6, 7], "euler_angl": [6, 7], "ones": [7, 9], "previou": 7, "e_k": 7, "e_0": 7, "e_1": 7, "canon": 7, "correct": 7, "covari": [6, 7], "transform": [6, 7, 9], "f_c": 7, "jacobian": [6, 7], "varphi": 7, "_c": 7, "definit": 7, "see": 7, "whole": [6, 7], "slightli": 7, "more": 7, "mesh_curl": 7, "435": 7, "hcurl": 7, "hcurldualcel": [6, 7, 9], "14": 7, "5714285714285716": 7, "gfu_curl": 7, "decompos": 7, "trace": 7, "extens": 7, "minor": 7, "requir": [6, 7], "cube": [7, 9], "trilinear": 7, "semidiscret": 7, "written": 7, "down": 7, "similar": [6, 7, 9], "pleasant": 7, "check": 7, "By": 7, "face": 7, "3p": 7, "12": 7, "6p": 7, "4p": 7, "verifi": [6, 7], "hold": 7, "unit_cub": [6, 7, 9], "hcurlprimalcel": [6, 7], "672": 7, "2736": 7, "7104": 7, "14640": 7, "count": 7, "nedg": 7, "nface": 7, "nelement": 7, "52": 7, "752": 7, "2964": 7, "7552": 7, "15380": 7, "would": 9, "chosen": 9, "classic": 9, "techniqu": 9, "x_p": 9, "yet": 9, "specifi": 9, "choos": 9, "exactli": 9, "quadratur": 9, "vanish": 9, "everi": 9, "except": 9, "expect": 9, "spars": 9, "gauss": 9, "radau": 9, "fix": 9, "treat": 9, "endpoint": 9, "gaussian": 9, "weight": 9, "easili": 9, "compar": 9, "exact": 9, "smooth": 9, "even": 9, "standard": 9, "fit": 9, "formula": 9, "trig_point": 9, "arrai": 9, "px": 9, "ob": 9, "spy": 9, "todens": 9, "seen": 9, "irs_f": 9, "m_diag": 9, "deletezeroel": 9, "coupl": 9, "entri": 9, "fes_curl": 9, "irs_fes_curl": 9, "m_lump": 9, "store": [6, 9], "togeth": 9, "structur": 9, "less": 9, "exploit": 9, "access": 9, "m_exact": 9, "exacttim": 9, "m_superspars": 9, "stime": 9, "superspars": 9, "m_exact_inv": 9, "sparsecholeski": 9, "m_supersparse_inv": 9, "tmp2": 9, "trialfunct": 6, "dx_vol": 6, "dx_edg": 6, "cross": 6, "geometr": 6, "contribut": 6, "cancel": 6, "out": 6, "permut": 6, "equival": 6, "class": 6, "reduct": 6, "memori": 6, "cost": 6, "realiz": 6, "flag": 6, "curl_gf": 6, "curlt": 6, "gft": 6, "geometry_fre": 6, "100": 6, "miss": 6, "spacial": 6, "nameerror": [], "befor": 6, "launch": 6, "hdiv": 6, "hdivdualcel": [], "h1primal": 6, "hdivdual": 6, "hiv": [], "side": 6, "mass_h1_inv": 6, "dx_h1": 6, "rh": 6, "gfp": 6, "1552574634552002": [], "014244794845581055": [], "16961169242858887": [], "029892921447753906": [], "15879392623901367": [], "013952970504760742": [], "15647482872009277": [], "024718046188354492": [], "attributeerror": [], "attribut": [], "15273332595825195": [], "014251708984375": [], "22423505783081055": [], "03263998031616211": [], "hprimaldualcel": [], "1410810947418213": [], "014180183410644531": [], "1572096347808838": [], "02831745147705078": [], "13854": [], "15579557418823242": [], "014397859573364258": [], "18164634704589844": [], "031702280044555664": [], "30510": [], "runtimeerror": [], "file": [], "401": [], "obj": [], "show": [], "arg": [], "kwarg": [], "399": [], "402": [], "kwargs_with_default": [], "width": [], "height": [], "403": [], "404": [], "filenam": [], "405": [], "generatehtml": [], "widget": [], "76": [], "basewebguiscen": [], "self": [], "74": [], "webguiwidget": [], "layout": [], "75": [], "encod": [], "getdata": [], "77": [], "displai": [], "260": [], "webglscen": [], "set_minmax": [], "257": [], "encodedata": [], "dtype": [], "float32": [], "259": [], "none": [], "rais": [], "cannot": [], "typ": [], "262": [], "263": [], "la": [], "basevector": [], "1414651870727539": [], "013903617858886719": [], "18274283409118652": [], "025954246520996094": [], "14151358604431152": [], "013034343719482422": [], "15631484985351562": [], "02606368064880371": [], "154870": 6, "344250": 6, "14334511756896973": [], "014346122741699219": [], "1761927604675293": [], "026534080505371094": [], "40": 6, "16558480262756348": [], "014064788818359375": [], "25002050399780273": [], "02897024154663086": [], "15956687927246094": [], "014201641082763672": [], "2367711067199707": [], "027669191360473633": [], "90": [], "13974499702453613": [], "01331949234008789": [], "1559600830078125": [], "024106740951538086": [], "150": 6, "14138245582580566": [], "013830423355102539": [], "20544767379760742": [], "028992652893066406": [], "1550123691558838": [], "014713525772094727": [], "22198820114135742": [], "026645660400390625": [], "includ": 6, "distribut": 6, "1411738395690918": [], "014023542404174805": [], "1531846523284912": [], "02953052520751953": [], "_h": 6, "int_t": 6, "mass_hdiv_inv": 6, "15952825546264648": [], "016004562377929688": [], "21116304397583008": [], "036969661712646484": [], "14396190643310547": [], "014764785766601562": [], "15488696098327637": [], "024342060089111328": [], "14777612686157227": [], "014744281768798828": [], "24978208541870117": [], "034796953201293945": [], "15024352073669434": [], "014367341995239258": [], "214324951171875": [], "03016209602355957": [], "m_u": [], "dot": [], "m_v": 10, "v_0": 10, "u_0": [], "u_": [], "u_j": [], "14087343215942383": [], "013223409652709961": [], "1841111183166504": [], "03317904472351074": [], "1401073932647705": [], "013926029205322266": [], "15143561363220215": [], "024031400680541992": [], "m_p": 10, "p_0": 10, "p_": 10, "p_j": 10, "13863372802734375": [], "014627456665039062": [], "2688016891479492": [], "02542257308959961": [], "known": 10, "sigma": 10, "spectral": 10, "radiu": 10, "1457195281982422": [], "013231277465820312": [], "15278911590576172": [], "04138064384460449": [], "parital_t": [], "1678910255432129": [], "015158414840698242": [], "156968355178833": [], "029218196868896484": [], "14244389533996582": [], "013953447341918945": [], "2671644687652588": [], "03650474548339844": [], "14476919174194336": [], "013946533203125": [], "15114641189575195": [], "027591228485107422": [], "14116525650024414": [], "014034509658813477": [], "151580810546875": [], "02973484992980957": [], "locnr": 9, "105662": 9, "394338": 9, "894338": 9, "605662": 9, "803561": 9, "0982194": 9, "0536948": 9, "555556": 9, "0778847": 9, "0416667": 9, "36656": 9, "418661": 9, "290669": 9, "0296385": 9, "725312": 9, "0915628": 9, "00999851": 9, "51153": 9, "0733767": 9, "00616387": 9, "341717": 9, "391248": 9, "0610607": 9, "273846": 9, "00365801": 9, "316355": 9, "227882": 9, "0022025": 9, "65232": [], "1840486526489258": [], "10226964950561523": [], "141755104064941": [], "0056302547454833984": [], "18722081184387207": [], "0008227825164794922": [], "14056038856506348": [], "014088630676269531": [], "15216398239135742": [], "030299901962280273": [], "1457281112670898": [], "0982968807220459": [], "94332766532898": [], "0051441192626953125": [], "1732780933380127": [], "000850677490234375": [], "341424e": [], "0x72bfd6786630": [], "0x72bfd4b248b0": [], "0x72bfd68f50b0": [], "44": [], "62706017494202": [], "707495e": [], "14597392082214355": [], "01627063751220703": [], "15703964233398438": [], "025795698165893555": [], "2047088146209717": [], "11965441703796387": [], "138391017913818": [], "005194664001464844": [], "17090559005737305": [], "0008075237274169922": [], "16479754447937012": [], "014780998229980469": [], "15702223777770996": [], "02642369270324707": [], "1339991092681885": [], "10081267356872559": [], "03842544555664": [], "0051000118255615234": [], "18155431747436523": [], "0008234977722167969": [], "1769404411315918": [], "020380258560180664": [], "17107176780700684": [], "024678468704223633": [], "122352": 9, "913511037826538": [], "17615032196044922": [], "74958562850952": [], "008779048919677734": [], "4080026149749756": [], "003787517547607422": [], "14220356941223145": 6, "013993024826049805": 6, "2083144187927246": 6, "03446626663208008": 6, "0105292797088623": 9, "21221518516540527": 9, "43076729774475": 9, "007737159729003906": 9, "389972448348999": 9, "0016677379608154297": 9}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"exampl": 0, "A": 1, "plane": 1, "wave": 1, "squar": 1, "ring": 2, "reson": [2, 8], "gener": [2, 7], "geometri": 2, "pml": 2, "sourc": 2, "coeffici": 2, "space": [2, 7, 8], "bilinear": 2, "form": 2, "time": [2, 5, 10], "loop": 2, "instal": 3, "get": 3, "ngsolv": [3, 4], "dual": [3, 4, 5, 7, 8], "cell": [3, 4, 5, 7, 8], "method": [3, 4, 5, 8], "add": 3, "us": 3, "pip": 3, "work": 3, "code": 3, "test": 3, "dualcellspac": 3, "The": [4, 5, 6, 7], "tabl": 4, "content": 4, "refer": 4, "domain": 5, "maxwel": 5, "system": 5, "problem": [5, 8], "set": [5, 8], "basic": 8, "idea": 8, "state": 8, "art": 8, "from": 8, "fdtd": 8, "construct": [7, 8], "discret": [6, 7], "mass": 9, "lump": 9, "step": 10, "introduct": 8, "reason": 8, "explicit": 8, "scatter": 8, "type": 8, "galerkin": 8, "high": 8, "order": 8, "barycentr": 7, "mesh": 7, "refin": 7, "2d": 7, "map": 7, "basi": 7, "function": 7, "x_p": 7, "mathrm": 7, "grad": 7, "mathcal": 7, "t": 7, "tild": 7, "curl": 7, "summeri": 7, "three": 7, "dimens": 7, "assembl": [], "differenti": 6, "oper": 6, "etud": [], "comput": 6, "gradient": 6, "gaussian": 6, "peak": 6, "\u00e9tude": 6}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"Examples": [[0, "examples"]], "A plane wave on a square": [[1, "a-plane-wave-on-a-square"]], "Ring resonator": [[2, "ring-resonator"]], "Generating the geometry": [[2, "generating-the-geometry"]], "PML geometry": [[2, "pml-geometry"]], "Source": [[2, "source"]], "Coefficients": [[2, "coefficients"]], "Spaces": [[2, "spaces"]], "Bilinear forms": [[2, "bilinear-forms"]], "Time loop": [[2, "time-loop"]], "Installation": [[3, "installation"]], "Get NGSolve": [[3, "get-ngsolve"]], "Install the Dual Cell Method add-on": [[3, "install-the-dual-cell-method-add-on"]], "Using pip": [[3, "using-pip"]], "Working with the code": [[3, "working-with-the-code"]], "Test the dualcellspaces installation": [[3, "test-the-dualcellspaces-installation"]], "The Dual Cell Method in NGSolve": [[4, "the-dual-cell-method-in-ngsolve"]], "Table of Contents": [[4, "table-of-contents"]], "References": [[4, "references"]], "The dual cell method for the time-domain Maxwell system": [[5, "the-dual-cell-method-for-the-time-domain-maxwell-system"]], "Problem setting": [[5, "problem-setting"]], "The discrete differential operators": [[6, "the-discrete-differential-operators"]], "\u00c9tude: computing the gradient of a Gaussian peak": [[6, "etude-computing-the-gradient-of-a-gaussian-peak"]], "Discrete spaces on dual cells": [[7, "discrete-spaces-on-dual-cells"]], "Barycentric mesh refinement in 2d": [[7, "barycentric-mesh-refinement-in-2d"]], "Mapped basis functions": [[7, "mapped-basis-functions"]], "The space X_P^{\\mathrm{grad}}(\\mathcal T)": [[7, "the-space-x-p-mathrm-grad-mathcal-t"]], "The space \\tilde X_P^{\\mathrm{curl}}(\\tilde{\\mathcal T})": [[7, "the-space-tilde-x-p-mathrm-curl-tilde-mathcal-t"]], "Summery of the construction": [[7, "summery-of-the-construction"]], "Generalization to three dimensions": [[7, "generalization-to-three-dimensions"]], "Introduction": [[8, "introduction"]], "Reasons for explicit methods": [[8, "reasons-for-explicit-methods"]], "scattering type problems": [[8, "scattering-type-problems"]], "resonance type problems": [[8, "resonance-type-problems"]], "State of the art": [[8, "state-of-the-art"]], "From FDTD to the dual cell method": [[8, "from-fdtd-to-the-dual-cell-method"]], "Basic idea of the dual cell construction": [[8, "basic-idea-of-the-dual-cell-construction"]], "Galerkin setting and high order spaces": [[8, "galerkin-setting-and-high-order-spaces"]], "Mass lumping": [[9, "mass-lumping"]], "Time stepping": [[10, "time-stepping"]]}, "indexentries": {}})