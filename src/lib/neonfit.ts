export type NeonColor = {
  id: string;
  name: string;
  hex: string;
  surcharge: number;
  active: boolean;
};

export type FontOption = {
  id: string;
  name: string;
  category: "script" | "display" | "futuristic" | "bold";
  minimumHeightIn: number;
  surcharge: number;
  active: boolean;
};

export type Accessory = { id: string; name: string; price: number; active: boolean };

export type DesignElement = {
  id: string;
  type: "text" | "shape";
  text: string;
  shape: string;
  color: string;
  font: string;
  x: number;
  y: number;
  widthIn: number;
  heightIn: number;
};

export type SignDesign = {
  id: string;
  title: string;
  elements: DesignElement[];
  widthIn: number;
  heightIn: number;
  board: string;
  unit: "in" | "ft" | "m";
  accessories: string[];
  preset?: string;
};

export type CatalogProduct = {
  id: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  salePrice: number;
  category: string;
  image: string;
  active: boolean;
  type: "template" | "standard";
  design?: SignDesign;
};

export type CartLine = {
  id: string;
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  design?: SignDesign;
};

export type OrderStatus = "Pending" | "Under review" | "In production" | "Shipped" | "Delivered" | "Cancelled";
export type PaymentStatus = "Unpaid" | "Pending verification" | "Partially paid" | "Paid" | "Refunded";

export type OrderRecord = {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  date: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentMethod: "Cash on delivery" | "Bank transfer";
  total: number;
  shipping: number;
  items: CartLine[];
  receipt?: string;
  tracking?: string;
  cancellationNote?: string;
};

export type QuoteRecord = {
  id: string;
  name: string;
  phone: string;
  email: string;
  width: string;
  height: string;
  color: string;
  notes: string;
  image?: string;
  date: string;
  status: "New" | "In review" | "Quoted" | "Closed";
};

export type ExpenseRecord = { id: string; title: string; category: string; amount: number; date: string };

export type NeonfitState = {
  products: CatalogProduct[];
  orders: OrderRecord[];
  quotes: QuoteRecord[];
  cart: CartLine[];
  savedDesigns: SignDesign[];
  colors: NeonColor[];
  fonts: FontOption[];
  accessories: Accessory[];
  shapes: string[];
  sizes: { id: string; name: string; widthIn: number; heightIn: number; surcharge: number; active: boolean }[];
  boards: { id: string; name: string; surcharge: number; active: boolean }[];
  expenses: ExpenseRecord[];
  settings: { shipping: number; delivery: string; labor: number; neonPerFoot: number; boardPerSqFt: number; adapter: number; mountKit: number; bankName: string; accountTitle: string; accountNumber: string };
};

export const STORAGE_KEY = "neonfitter.store.v1";

export const DEFAULT_COLORS: NeonColor[] = [
  { id: "pink", name: "Pink", hex: "#FF4FAD", surcharge: 0, active: true },
  { id: "yellow", name: "Yellow", hex: "#FFE34D", surcharge: 0, active: true },
  { id: "ice-blue", name: "Ice blue", hex: "#91E8FF", surcharge: 0, active: true },
  { id: "red", name: "Red", hex: "#FF3737", surcharge: 0, active: true },
  { id: "golden", name: "Golden", hex: "#FFD16A", surcharge: 0, active: true },
  { id: "blue", name: "Blue", hex: "#367CFF", surcharge: 0, active: true },
];

const FONT_DATA: [string, FontOption["category"]][] = [
  ["Alexa", "script"], ["Amsterdam", "script"], ["Amanda", "script"], ["Austin", "script"], ["Barcelona", "script"],
  ["Bayview", "script"], ["Beachfront", "script"], ["Chelsea", "script"], ["Florence", "script"], ["Freehand", "script"],
  ["Freespirit", "script"], ["Greenworld", "script"], ["Lazy Sunday", "script"], ["Love Note", "script"], ["Love Neon", "script"],
  ["Manchester", "script"], ["Neonscript", "script"], ["New Cursive", "script"], ["Northshore", "script"], ["Notting Hill", "script"],
  ["Olivia Vintage", "script"], ["Photogenic", "script"], ["Royalty Rocket", "script"], ["Signature", "script"], ["Sorrento", "script"],
  ["Venetian", "script"], ["Weekender", "script"], ["Wild Script", "script"], ["Avante", "display"], ["Bellview", "display"],
  ["Buttercup", "script"], ["Classic Type", "display"], ["Los Angeles", "display"], ["Majorca", "display"], ["Manhattan", "display"],
  ["Marquee", "display"], ["Mayfair", "display"], ["Melbourne", "display"], ["Milan", "display"], ["Monaco", "display"],
  ["Neo Tokyo", "futuristic"], ["San Diego", "display"], ["Simplicity", "display"], ["Typewriter", "display"], ["Waikiki", "display"],
  ["Neon Glow", "futuristic"], ["Neon Lite", "futuristic"], ["Neontrace", "futuristic"], ["Nevada", "futuristic"], ["Rockstar", "bold"],
  ["Sci-Fi", "futuristic"], ["Submarine", "futuristic"], ["Vancouver", "display"], ["Westcoast", "display"],
];

export const DEFAULT_FONTS: FontOption[] = FONT_DATA.map(([name, category]) => ({
  id: name.toLowerCase().replaceAll(" ", "-"),
  name,
  category,
  minimumHeightIn: category === "script" ? 3 : category === "futuristic" ? 3.5 : 2,
  surcharge: 0,
  active: true,
}));

export const DEFAULT_ACCESSORIES: Accessory[] = [
  { id: "mount-kit", name: "Mounting kit", price: 250, active: true },
  { id: "adapter", name: "Power adapter", price: 900, active: true },
];

export const DEFAULT_SIZES = [
  { id: "small", name: "Small", widthIn: 12, heightIn: 6, surcharge: 0, active: true },
  { id: "medium", name: "Medium", widthIn: 12, heightIn: 20, surcharge: 650, active: true },
  { id: "large", name: "Large", widthIn: 15, heightIn: 24, surcharge: 1150, active: true },
];

export const DEFAULT_BOARDS = [
  { id: "rectangle", name: "Rectangle", surcharge: 0, active: true },
  { id: "rounded", name: "Rounded corners", surcharge: 0, active: true },
  { id: "cut-around", name: "Cut around", surcharge: 250, active: true },
];

export const SHAPE_NAMES = ["Heart", "Crown", "Gamepad", "Coffee", "Star", "Music"];

export function createDemoDesign(text = "GOOD VIBES", color = DEFAULT_COLORS[0].hex): SignDesign {
  return {
    id: `design-${text.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`,
    title: text,
    widthIn: 24,
    heightIn: 12,
    board: "rounded",
    unit: "in",
    accessories: ["adapter", "mount-kit"],
    elements: [{ id: "line-1", type: "text", text, shape: "Heart", color, font: "Amsterdam", x: 12, y: 6, widthIn: Math.min(20, Math.max(10, text.length * 1.2)), heightIn: 3, }],
  };
}

const demoProducts: CatalogProduct[] = [
  { id: "good-vibes", name: "Good Vibes", shortDescription: "A little glow goes a long way.", description: "Make your favorite corner feel like your own with this hand-finished LED neon sign.", price: 12500, salePrice: 10500, category: "Home & living", image: "bedroom", active: true, type: "template", design: createDemoDesign("Good Vibes", DEFAULT_COLORS[0].hex) },
  { id: "level-up", name: "Level Up", shortDescription: "Power up your setup.", description: "A vivid finishing touch for gaming rooms, studios, and stream setups.", price: 9800, salePrice: 8500, category: "Gaming", image: "gaming", active: true, type: "template", design: createDemoDesign("LEVEL UP", DEFAULT_COLORS[5].hex) },
  { id: "coffee-club", name: "Coffee Club", shortDescription: "A café classic, made to glow.", description: "Give your coffee bar its very own signature glow.", price: 11000, salePrice: 9500, category: "Food & drink", image: "cafe", active: true, type: "template", design: createDemoDesign("COFFEE CLUB", DEFAULT_COLORS[1].hex) },
  { id: "home-sweet-home", name: "Home Sweet Home", shortDescription: "Make your space unmistakably yours.", description: "A warm welcome for the place you love most.", price: 13200, salePrice: 11800, category: "Home & living", image: "home", active: true, type: "template", design: createDemoDesign("HOME SWEET HOME", DEFAULT_COLORS[4].hex) },
  { id: "heart-light", name: "A Little Love", shortDescription: "A heart-shaped glow for your walls.", description: "An easy-to-place pink neon heart, ready to brighten any room.", price: 7200, salePrice: 6400, category: "Gifts", image: "bedroom", active: true, type: "standard" },
  { id: "open-late", name: "Open Late", shortDescription: "Your sign to stay a little longer.", description: "A bright, ready-made favorite for cafés, bars, and late-night corners.", price: 14500, salePrice: 12900, category: "Business", image: "cafe", active: true, type: "standard" },
];

function demoOrder(id: string, name: string, phone: string, total: number, status: OrderStatus, paymentStatus: PaymentStatus, itemName: string, date: string): OrderRecord {
  const product = demoProducts[0];
  return {
    id, name, phone, email: `${name.toLowerCase().replaceAll(" ", ".")}@example.com`, address: "18 Garden Street", city: "Karachi", date, status, paymentStatus,
    paymentMethod: paymentStatus === "Pending verification" ? "Bank transfer" : "Cash on delivery", total, shipping: 300,
    items: [{ id: `item-${id}`, productId: product.id, title: itemName, price: total - 300, quantity: 1, image: product.image, design: product.design }],
  };
}

export function createInitialState(): NeonfitState {
  return {
    products: demoProducts,
    orders: [
      demoOrder("NF-10025", "Ayesha Khan", "03001234567", 15800, "Pending", "Pending verification", "Good Vibes · custom color", "Today, 10:42 AM"),
      demoOrder("NF-10024", "Hamza Ali", "03019876543", 9900, "Under review", "Paid", "Level Up", "Today, 9:18 AM"),
      demoOrder("NF-10023", "Sara Ahmed", "03112223334", 12400, "In production", "Partially paid", "Home Sweet Home", "Yesterday"),
      demoOrder("NF-10022", "Usman Shah", "03215556677", 6800, "Shipped", "Paid", "A Little Love", "Yesterday"),
      demoOrder("NF-10021", "Mina Raza", "03334445566", 11100, "Delivered", "Paid", "Coffee Club", "Nov 06, 2026"),
      demoOrder("NF-10020", "Daniyal Noor", "03445556677", 7800, "Cancelled", "Unpaid", "Good Vibes", "Nov 05, 2026"),
    ],
    quotes: [{ id: "QT-042", name: "Noor Studio", phone: "03005551234", email: "hello@example.com", width: "24 in", height: "12 in", color: "Ice blue", notes: "A simple wordmark for our new space.", date: "Today", status: "New" }],
    cart: [],
    savedDesigns: [],
    colors: DEFAULT_COLORS,
    fonts: DEFAULT_FONTS,
    accessories: DEFAULT_ACCESSORIES,
    shapes: SHAPE_NAMES,
    sizes: DEFAULT_SIZES,
    boards: DEFAULT_BOARDS,
    expenses: [
      { id: "expense-1", title: "Acrylic sheet restock", category: "Materials", amount: 18000, date: "Nov 08, 2026" },
      { id: "expense-2", title: "Workshop delivery", category: "Shipping", amount: 3200, date: "Nov 07, 2026" },
    ],
    settings: { shipping: 300, delivery: "7–10 working days", labor: 500, neonPerFoot: 220, boardPerSqFt: 550, adapter: 900, mountKit: 250, bankName: "Your bank details", accountTitle: "NeonFitter", accountNumber: "Add your account number" },
  };
}

export function minimumLetterHeight(category: FontOption["category"]): number {
  if (category === "script") return 3;
  if (category === "futuristic") return 3.5;
  return 2;
}

export type EstimateBreakdown = { neonFt: number; boardSqFt: number; neon: number; board: number; accessories: number; extras: number; labor: number; subtotal: number; shipping: number; total: number };

export function calculateEstimate(design: SignDesign, state: Pick<NeonfitState, "settings" | "colors" | "fonts" | "accessories" | "sizes" | "boards">): EstimateBreakdown {
  const neonInches = design.elements.reduce((total, element) => {
    if (element.type === "text") {
      const glyphFactor = element.font.toLowerCase().includes("script") || element.font.toLowerCase().includes("love") ? 0.85 : 0.72;
      return total + element.text.trim().length * element.heightIn * glyphFactor;
    }
    const pathFactor = element.shape === "Star" ? 2.2 : element.shape === "Heart" ? 2.6 : 2.4;
    return total + ((element.widthIn + element.heightIn) / 2) * pathFactor;
  }, 0);
  const neonFt = Math.round((neonInches / 12) * 10) / 10;
  const boardSqFt = Math.round(((design.widthIn * design.heightIn) / 144) * 100) / 100;
  const neon = Math.round(neonFt * state.settings.neonPerFoot);
  const board = Math.round(boardSqFt * state.settings.boardPerSqFt);
  const accessories = design.accessories.reduce((sum, id) => sum + (state.accessories.find((item) => item.id === id)?.price ?? 0), 0);
  const extras = design.elements.reduce((sum, element) => {
    const colorExtra = state.colors.find((color) => color.hex.toLowerCase() === element.color.toLowerCase())?.surcharge ?? 0;
    const fontExtra = element.type === "text" ? state.fonts.find((font) => font.name === element.font)?.surcharge ?? 0 : 0;
    return sum + colorExtra + fontExtra;
  }, 0) + (state.sizes.find((size) => size.widthIn === design.widthIn && size.heightIn === design.heightIn)?.surcharge ?? 0)
    + (state.boards.find((boardType) => boardType.id === design.board)?.surcharge ?? 0);
  const labor = state.settings.labor;
  const subtotal = neon + board + accessories + extras + labor;
  return { neonFt, boardSqFt, neon, board, accessories, extras, labor, subtotal, shipping: state.settings.shipping, total: subtotal + state.settings.shipping };
}

export function formatPKR(value: number): string {
  return `Rs. ${Math.round(value).toLocaleString("en-PK")}`;
}

export function convertInches(value: number, unit: SignDesign["unit"]): number {
  if (unit === "ft") return value / 12;
  if (unit === "m") return value * 0.0254;
  return value;
}

export function unitLabel(unit: SignDesign["unit"]): string {
  if (unit === "ft") return "ft";
  if (unit === "m") return "m";
  return "in";
}

export function productImage(product: Pick<CatalogProduct, "image">): string {
  return product.image;
}