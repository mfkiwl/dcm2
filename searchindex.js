Search.setIndex({"docnames": ["examples", "examples/ring_resonator", "installation", "intro"], "filenames": ["examples.md", "examples/ring_resonator.ipynb", "installation.md", "intro.md"], "titles": ["<span class=\"section-number\">2. </span>Examples", "<span class=\"section-number\">2.1. </span>Ring resonator", "<span class=\"section-number\">1. </span>Installation", "The Dual Cell Method in NGSolve"], "terms": {"m": [2, 3], "wess": 3, "j": 3, "sch\u00f6berl": 3, "tu": 3, "wien": 3, "institut": 3, "analysi": 3, "scientif": 3, "comput": 3, "afd": [], "asdfadf": [], "thi": [1, 3], "book": 3, "i": [1, 2, 3], "design": 3, "provid": 3, "an": [1, 2, 3], "introduct": 3, "exampl": 3, "implement": [1, 3], "high": [2, 3], "order": [1, 2, 3], "finit": [2, 3], "element": [1, 2, 3], "librari": [2, 3], "http": 2, "org": [], "For": [2, 3], "full": 3, "mathemat": 3, "we": [1, 2, 3], "kcschoberl21": 3, "wkcs23": 3, "bernard": 3, "kapidani": 3, "lorenzo": 3, "codecasa": 3, "joachim": 3, "sch": 3, "\u00f6": 3, "berl": 3, "arbitrari": 3, "block": [1, 3], "diagon": [1, 3], "mass": [1, 3], "matric": [1, 3], "time": 3, "depend": 3, "2": [1, 3], "d": 3, "axwel": 3, "equat": [1, 3], "phy": 3, "433": 3, "paper": 3, "No": 3, "110184": 3, "20": [1, 3], "2021": 3, "url": [], "doi": 3, "10": [1, 3], "1016": 3, "jcp": 3, "marku": 3, "lump": [1, 3], "polynomi": 3, "degre": 3, "acoust": 3, "electromagnet": [1, 3], "wave": [1, 3], "2023": 3, "arxiv": 3, "2312": 3, "14716": 3, "instal": 3, "A": [], "short": [], "The": [1, 2], "main": 2, "premis": 2, "suffici": 2, "recent": 2, "version": 2, "ngsolv": 1, "alreadi": [], "If": 2, "case": 1, "most": 2, "simpl": 2, "wai": 2, "pack": [], "done": 2, "us": 1, "pip": [], "python": 2, "numpi": [1, 2], "scipi": 2, "matplotlib": [1, 2], "jupyt": 2, "ipyparallel": 2, "scikit": 2, "build": 2, "upgrad": 2, "pre": 2, "webgui_jupyter_widget": 2, "packag": 2, "dcm": [2, 3], "galerkin": 3, "simul": [1, 3], "domain": [1, 3], "e": [1, 2, 3], "g": [2, 3], "acoustiv": 3, "mix": 3, "formul": 3, "It": [1, 3], "disconitinu": 3, "variant": 3, "where": [1, 3], "two": [1, 3], "field": [1, 3], "ar": [1, 3], "approxim": 3, "conform": 3, "function": [1, 3], "mesh": [1, 3], "each": 3, "other": 3, "thu": [2, 3], "respect": [1, 3], "ansatz": 3, "featur": 3, "discontinu": [1, 3], "differ": 3, "boundari": [1, 3], "As": 2, "avail": 2, "core": 2, "ha": [1, 2], "again": 2, "via": [1, 2], "git": 2, "github": 2, "com": 2, "mai": [1, 2], "clone": 2, "cd": 2, "src": [], "mkdir": 2, "cmake": 2, "make": 2, "j4": 2, "base": 3, "joint": 3, "work": 3, "b": [1, 3], "l": [1, 3], "beforehand": 2, "troubleshoot": 2, "refer": 2, "variou": 2, "tutori": 2, "ngs24": 2, "document": 2, "you": 2, "do": 2, "want": [1, 2], "updat": 2, "modifi": 2, "your": 2, "might": 2, "consid": 2, "virtual": 2, "environ": 2, "built": 2, "from": [1, 2], "sourc": 2, "pybind11_stubgen": 2, "isol": 2, "have": 2, "binari": 2, "wa": 2, "also": [1, 2], "modul": 2, "them": 2, "can": [1, 2], "either": 2, "whether": 2, "demo": 2, "dc_intrul": 2, "first_step": [], "first": [], "step": [], "more": [], "detail": [], "exposit": [], "spacial": [], "discret": 1, "type": [], "form": [], "begin": 1, "align": 1, "partial_t": 1, "p": 1, "t": 1, "x": [], "v": 1, "0": 1, "top": 1, "end": 1, "text": [], "c": 1, "omega": 1, "v_p": [], "v_v": [], "suitabl": [], "space": [], "differenti": [], "oper": 1, "mathbb": [], "r": 1, "1": 1, "3": 1, "includ": [], "max": 1, "maxwel": [], "system": 1, "mathrm": 1, "curl": [], "div": 1, "aim": [], "line": 1, "approach": [], "problem": [], "obtain": 1, "od": [], "result": 1, "treat": [], "standard": [], "scheme": [], "stiff": [], "leap": [], "frog": [], "h": 1, "chosen": [], "local": [], "primal": [], "choos": [], "dimension": [], "weak": [], "int_": 1, "q": 1, "cdot": 1, "nabla": 1, "w": [], "p_0": [], "v_0": [], "dx": 1, "numref": [], "quick": [], "start": 1, "In": [], "section": [], "describ": [], "how": [], "appli": [], "propag": 1, "tm": 1, "through": 1, "devic": 1, "dual": 1, "cell": 1, "method": 1, "add": 1, "given": 1, "parallel": 1, "wire": 1, "shape": 1, "one": 1, "between": 1, "splinegeometri": 1, "import": 1, "netgen": 1, "geom2d": 1, "gm": 1, "webgui": 1, "draw": 1, "geo": 1, "paramet": 1, "xneg": 1, "43": 1, "xpo": 1, "yneg": 1, "48": 1, "ypo": 1, "wslab": 1, "04": 1, "cringx": 1, "cringi": 1, "rring": 1, "4": 1, "gap": 1, "005": 1, "pntx": 1, "pnty": 1, "pt": 1, "yi": 1, "xi": 1, "append": 1, "addpoint": 1, "inner": 1, "rect": 1, "leftdomain": 1, "rightdomain": 1, "5": 1, "bc": 1, "normal_wg_rightbottom": 1, "normal_wg_leftbottom": 1, "7": 1, "6": 1, "9": 1, "normal_wg_righttop": 1, "8": 1, "normal_wg_lefttop": 1, "11": 1, "addcircl": 1, "setmateri": 1, "air": 1, "eps_nin": 1, "follow": 1, "triangul": 1, "mesh_inn": 1, "generatemesh": 1, "maxh": 1, "curv": 1, "basewebguiscen": [], "howev": 1, "perfectli": 1, "match": 1, "layer": 1, "unbound": 1, "pml": [], "pmlwidth": 1, "15": [], "02": [], "data": 1, "createpml": 1, "normal": 1, "ad": 1, "our": 1, "interior": 1, "bd": 1, "getboundari": 1, "print": 1, "default": 1, "mat": 1, "getmateri": 1, "pml_default": 1, "pml_corner": 1, "pml_default_duplicate_1": 1, "pml_normal_wg_rightbottom": 1, "pml_default_duplicate_2": 1, "pml_normal_wg_righttop": 1, "pml_default_duplicate_3": 1, "pml_default_duplicate_4": 1, "pml_default_duplicate_5": 1, "pml_normal_wg_lefttop": 1, "pml_default_duplicate_6": 1, "pml_normal_wg_leftbottom": 1, "pml_default_duplicate_7": 1, "defin": 1, "insert": [], "sketch": 1, "OF": [], "here": [], "govern": 1, "scalar": 1, "vector": 1, "u": 1, "pq": 1, "fq": 1, "all": 1, "test": 1, "f": 1, "To": 1, "surround": 1, "absorb": 1, "which": 1, "lead": [], "damp": 1, "pmlgeo": [], "alpha": 1, "omega_": 1, "tb": 1, "cup": 1, "lr": 1, "n": 1, "mathbf": 1, "hat": 1, "left": 1, "nn": 1, "right": 1, "int": 1, "fv": 1, "omega_c": 1, "pyplot": 1, "pl": 1, "np": 1, "wavelength": 1, "542": 1, "fcen": 1, "tpeak": 1, "sourcei": 1, "coefficientfunct": 1, "sin": 1, "pi": 1, "y": 1, "fes_facet": 1, "facetfespac": 1, "gfsourc": 1, "gridfunct": 1, "set": 1, "definedon": 1, "def": 1, "t_envelop": 1, "return": 1, "ab": 1, "exp": 1, "sqrt": 1, "delta": 1, "001": 1, "arang": 1, "xlabel": 1, "plot": 1, "figur": 1, "tmp": 1, "ipykernel_315069": [], "295753622": [], "py": [], "14": [], "runtimewarn": [], "divid": [], "zero": [], "encount": [], "line2d": [], "0x7dfdc25f8040": [], "ipykernel_319696": [], "4031115408": [], "dualcellspac": 1, "dc": 1, "ipykernel_352995": [], "next": 1, "up": 1, "fes_p": 1, "h1dualcel": 1, "dirichlet": 1, "outer": 1, "fes_u": 1, "hdivprimalcel": 1, "uniform_ord": [], "true": 1, "dof": 1, "format": 1, "ndof": 1, "vectori": 1, "h1primalcel": [], "hcurldualcel": [], "fe": 1, "total": 1, "p1": [], "q1": [], "tnt": 1, "u1": [], "v1": [], "746120e": [], "05": 1, "056780e": [], "06": [], "062784e": [], "help": [], "class": [], "comp": [], "fespac": 1, "hdiv": [], "non": 1, "smooth": [], "continu": [], "edg": [], "my": [], "own": [], "second": [], "triangular": [], "keyword": [], "argument": [], "complex": [], "bool": [], "fals": 1, "should": [], "regexpr": [], "regular": [], "express": [], "string": [], "than": [], "combin": [], "dirichlet_bbnd": [], "bboundari": [], "point": [], "2d": [], "3d": [], "dirichlet_bbbnd": [], "bbboundari": [], "region": [], "onli": [], "specif": [], "creat": [], "materi": 1, "assum": [], "dim": 1, "multi": [], "h1": [], "dgjump": [], "enabl": [], "dg": [], "flag": [], "need": 1, "sinc": [], "coupl": [], "chang": [], "sparsiti": [], "pattern": [], "autoupd": [], "automat": [], "low_order_spac": [], "lowest": [], "togeth": [], "some": [], "precondition": [], "order_polici": [], "oldstyl": [], "constant": [], "same": [], "fix": [], "nodal": [], "node": [], "variabl": [], "individu": [], "face": [], "last": [], "decad": [], "basi": [], "everi": [], "direct": 1, "resolut": [], "ngs_object": [], "pybind11_builtin": [], "pybind11_object": [], "builtin": [], "object": 1, "convertgr2goper": [], "self": [], "basematrix": [], "getintegrationrul": 1, "dict": [], "fem": 1, "et": 1, "integrationrul": 1, "__getstate__": [], "tupl": [], "__init__": [], "kwarg": [], "none": [], "__setstate__": [], "arg0": [], "static": [], "__flags_doc__": [], "pycapsul": [], "descriptor": [], "__dict__": [], "attribut": [], "__pybind11_module_local_v4_gcc_libstdcpp_cxxabi1016__": [], "capsul": [], "objec": [], "inherit": [], "applym": [], "vec": 1, "la": [], "basevector": [], "rho": [], "matrix": [], "l2": [], "like": [], "convertl2oper": [], "l2space": [], "couplingtyp": [], "dofnr": [], "coupling_typ": [], "get": [], "freedom": [], "input": [], "number": [], "createdirectsolverclust": [], "list": [], "createsmoothingblock": [], "pyngcor": [], "table_i": [], "tabl": [], "jacobi": [], "gauss": [], "seidel": [], "entri": [], "belong": [], "paramt": [], "blocktyp": [], "vertex": [], "facet": [], "vertexedg": [], "multipl": [], "backward": [], "compat": [], "old": [], "style": [], "condens": [], "boolexclud": [], "elimin": [], "arg": [], "overload": [], "vol_or_bnd": [], "vorb": [], "vol": [], "fespaceelementrang": [], "iter": [], "rang": [], "bnd": [], "bbnd": [], "finalizeupd": [], "final": [], "freedof": 1, "bitarrai": [], "free": [], "getdofnr": [], "ei": [], "elementid": [], "id": 1, "ni": [], "nodeid": [], "getdof": [], "getf": [], "correspond": [], "getord": [], "now": 1, "isotrop": [], "support": [], "gettrac": [], "arg1": [], "arg2": [], "arg3": [], "gettracetran": [], "hidealldof": [], "compon": 1, "ngstd": [], "dummyargu": [], "visibl": [], "hidden_dof": [], "overwritten": [], "ani": [], "invm": [], "option": [], "paralleldof": [], "identif": [], "mpi": [], "distribut": [], "prolong": [], "ngmg": [], "grid": [], "dofrang": [], "deprec": [], "productspac": [], "setcouplingtyp": [], "intrang": [], "interv": [], "setdefinedon": [], "setord": [], "element_typ": [], "solvem": [], "solv": 1, "hand": [], "side": [], "cf": 1, "testfunct": 1, "proxi": [], "symbol": [], "integr": 1, "trial": [], "traceoper": [], "tracespac": [], "averag": [], "trialfunct": [], "after": [], "refin": [], "updatedoft": [], "__eq__": [], "__mul__": [], "ngcomp": [], "compoundfespac": [], "__pow__": [], "compoundfespaceallsam": [], "__str__": [], "str": [], "__timing__": [], "__special_treated_flags__": [], "readonli": [], "properti": [], "globalord": [], "queri": [], "global": [], "is_complex": [], "loembed": [], "lospac": [], "ndofglob": [], "__hash__": [], "__memory__": [], "name": [], "__new__": [], "pybind11_typ": [], "new": [], "see": [], "accur": [], "signatur": [], "modulenotfounderror": [], "traceback": [], "call": [], "12": [], "__version__": [], "2403": [], "75": [], "gdc8074600": [], "waveguid": 1, "background": 1, "medium": 1, "eps_r": 1, "startswith": 1, "pml_normal_wg": 1, "ep": 1, "scale": 1, "corner": 1, "nvec": 1, "els": 1, "cfn": 1, "all_dofs_togeth": [], "vectorl2": [], "piola": [], "737400e": [], "176000e": [], "182680e": [], "rule": 1, "These": 1, "over": 1, "volum": 1, "ir": 1, "dxw": 1, "intrul": 1, "dsw": 1, "element_boundari": 1, "segm": 1, "0x7337ac549530": [], "trig": 1, "0x7337ac54bbb0": [], "tet": 1, "0x7337ac54b2f0": [], "diverg": 1, "contain": 1, "jump": 1, "term": 1, "due": 1, "fact": 1, "v_h": 1, "specialcf": 1, "bilinearform": 1, "geom_fre": 1, "assembl": 1, "fes_tr": [], "traceop": [], "phat": [], "bel": [], "trialspac": [], "testspac": [], "grad": [], "btr": [], "thei": 1, "effici": 1, "invmassp": 1, "invers": 1, "invmassu": 1, "pml1d": 1, "pml_normal": 1, "dampp1": 1, "dampp2": 1, "dampu1": 1, "outerproduct": 1, "dampu2": 1, "big": 1, "embed": 1, "small": 1, "emb_p": 1, "emb_phat": 1, "emb_u": 1, "emb_uhat": 1, "b_big": 1, "dampu_big": 1, "dampp_big": 1, "invmassp_big": 1, "invmassu_big": 1, "lastli": 1, "linearform": 1, "q_big": 1, "lsrc_big": [], "remain": 1, "gfu": 1, "createvector": 1, "tend": 1, "tau": 1, "1e": 1, "5e": 1, "2e": [], "scene": 1, "autoscal": 1, "min": 1, "intpoint": 1, "getwebguipoint": 1, "taskmanag": 1, "while": 1, "50": [], "redraw": 1, "398799999999988735": [], "63": [], "g8c231e980": [], "0x71497519ceb0": [], "0x71497519d1f0": [], "0x71497519ddf0": [], "008799999999999997": [], "018799999999999997": [], "028799999999999937": [], "038799999999999876": [], "048799999999999816": [], "058799999999999755": [], "06879999999999992": [], "0788000000000002": [], "08880000000000049": [], "09880000000000078": [], "10880000000000106": [], "11880000000000135": [], "keyboardinterrupt": [], "17": [], "go": [], "directori": [], "test_spac": 2, "156000e": [], "03": [], "670400e": [], "572000e": [], "0x7950f9fd4db0": [], "0x7950f9fd53b0": [], "0x7950f9fd50b0": [], "gfp_histori": 1, "multidim": 1, "200": 1, "nameerror": [], "16": [], "addmultidimcompon": 1, "648799999999961235": [], "anim": 1, "0x7b25aa68b7b0": [], "0x7b25aa68acb0": [], "0x7b25aa63a9f0": [], "18": [], "19": [], "0x7ff31af3d0f0": [], "0x7ff31af3f5b0": [], "0x7ff31afd3970": [], "0x7e86ba59abb0": [], "0x7e86ba59b670": [], "0x7e86ba505130": [], "0x700d10415930": [], "0x700d104159f0": [], "0x700d10417030": [], "86": [], "g39b06c645": [], "0x701590677530": [], "0x701590677c70": [], "0x7015906766b0": [], "0x7a3d137af3b0": [], "0x7a3d137aca70": [], "0x7a3d137acd70": [], "0x7c642c3fb9b0": [], "0x7c642c3f8c70": [], "0x7c642c3fa7b0": [], "030700e": 1, "887000e": 1, "383540e": 1, "0x70232cb071f0": [], "0x70232cb06930": [], "0x70232cb07630": [], "lsrc": 1, "4e": 1, "25": 1, "draweveri": 1, "100": [], "": 1, "087120000001544": [], "113300e": [], "07": 1, "ssss": [], "37": [], "23": [], "21": [], "22": [], "24": [], "dev": 2, "0x77bf341b5e70": [], "0x77bf341b6730": [], "0x77bf341b4570": [], "26": [], "27": [], "0x7867fcfd1d30": [], "0x786838992730": [], "0x786838993170": [], "0x7167c0564670": [], "0x7167c05663b0": [], "0x7167c0566070": [], "0x729289164c70": [], "0x729289166cf0": [], "0x7292891675f0": [], "0x7d2e835c45f0": [], "0x7d2e835c6230": [], "0x7d2e835c7430": [], "startnow": 1, "mdofss": 1, "finish": 1, "mdof": 1, "889308e": [], "desir": 1, "below": 1, "horizont": 1, "suppos": 1, "0x7dd01f168b70": 1, "0x7dd01f16a570": 1, "0x7dd01f16a7f0": 1, "543840e": 1}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"The": 3, "dual": [2, 3], "cell": [2, 3], "method": [2, 3], "ngsolv": [2, 3], "tabl": 3, "content": 3, "refer": 3, "afd": [], "asdfa": [], "instal": 2, "A": [], "short": [], "introduct": [], "get": 2, "add": 2, "us": 2, "pip": 2, "compil": [], "code": 2, "work": 2, "test": 2, "dcm": [], "dualcellspac": 2, "first": [], "step": [], "spacial": [], "discret": [], "quick": [], "start": [], "problem": [], "set": [], "exampl": 0, "time": 1, "domain": [], "maxwel": [], "system": [], "construct": [], "space": 1, "mass": [], "lump": [], "": [], "equat": [], "state": [], "art": [], "from": [], "fdtd": [], "ring": 1, "reson": 1, "gener": 1, "geometri": 1, "pml": 1, "sourc": 1, "coeffici": 1, "bilinear": 1, "form": 1, "loop": 1}, "envversion": {"sphinx.domains.c": 3, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 9, "sphinx.domains.index": 1, "sphinx.domains.javascript": 3, "sphinx.domains.math": 2, "sphinx.domains.python": 4, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinxcontrib.bibtex": 9, "sphinx": 60}, "alltitles": {"Examples": [[0, "examples"]], "Ring resonator": [[1, "ring-resonator"]], "Generating the geometry": [[1, "generating-the-geometry"]], "PML geometry": [[1, "pml-geometry"]], "Source": [[1, "source"]], "Coefficients": [[1, "coefficients"]], "Spaces": [[1, "spaces"]], "Bilinear forms": [[1, "bilinear-forms"]], "Time loop": [[1, "time-loop"]], "Installation": [[2, "installation"]], "Get NGSolve": [[2, "get-ngsolve"]], "Install the Dual Cell Method add-on": [[2, "install-the-dual-cell-method-add-on"]], "Using pip": [[2, "using-pip"]], "Working with the code": [[2, "working-with-the-code"]], "Test the dualcellspaces installation": [[2, "test-the-dualcellspaces-installation"]], "The Dual Cell Method in NGSolve": [[3, "the-dual-cell-method-in-ngsolve"]], "Table of Contents": [[3, "table-of-contents"]], "References": [[3, "references"]]}, "indexentries": {}})